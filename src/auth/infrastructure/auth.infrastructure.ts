import Result from "../../shared/application/interface/result.interface";
import { AuthRepository } from "../domain/repositories/auth.repository";
import { AuthModel } from "../domain/models/auth.model";
import DatabaseBootstrap from "../../bootstrap/database.bootstrap";
import { UserEntity } from "../../users/domain/models/user.entity";
import { TokensModel } from "../domain/models/tokens.model";
import { Repository } from "typeorm";
import { PasswordService } from "../../users/domain/services/password.service";
import { ResponseDto } from "../../shared/application/interface/dto/response.dto";
import { Trace } from "../../shared/helpers/trace.helpers";
import { TokenService } from "../../users/domain/services/token.service";

export class AuthInfrastructure implements AuthRepository {
    async login(auth: AuthModel): Promise<Result<TokensModel>> {
        const dataSource = DatabaseBootstrap.dataSource;
        const repository: Repository<UserEntity> =
            dataSource.getRepository(UserEntity);
        /* Encontrar un usuario */
        const user = await repository.findOne({ where: { email: auth.email }, relations: ["roles"] });

        if (user) {
            const isPasswordValid = await PasswordService.compare(
                auth.password,
                user.password
            );

            if (isPasswordValid) {
                const accesTokens = await TokenService.generateAccessToken({
                    email: user.email,
                    name: user.name,
                    roles: user.roles.map((role) => role.roleName),
                });
                /* Para que el refresh Token no cambie */
                return ResponseDto(Trace.traceId(), { accesTokens, refreshToken: user.refreshToken });
            } else {
                throw new Error("User is not found");
            }
        } else {
            throw new Error("User is not found");
        }
    }

    async getNewAccessToken(refreshToken: string): Promise<Result<TokensModel>> {
        const dataSource = DatabaseBootstrap.dataSource;
        const repository: Repository<UserEntity> =
            dataSource.getRepository(UserEntity);

        const user = await repository.findOne({
            where: { refreshToken, active: true },
            relations: ["roles"],
        });

        if (user) {
            const tokens = TokenService.generateTokens({
                email: user.email,
                name: user.name,
                roles: user.roles.map((role) => role.roleName),
            });

            user.refreshToken = tokens.refreshToken;
            await repository.save(user);

            return ResponseDto(Trace.traceId(), tokens);
        } else {
            throw new Error("User is not found");
        }
    }
}
