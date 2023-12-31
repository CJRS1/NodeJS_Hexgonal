import { v4 as uuidv4 } from "uuid";
import jwt from "jwt-simple"
import moment from "moment"
import yenv from "yenv"
import { UserModel } from "../models/user.model";
import { ITokens } from "../models/tokens.interface";
import { ResponseValidateToken } from "src/shared/types/response-validate-token.type";
import { TOKEN_ERROR, TOKEN_ERROR_MESSAGE } from "src/shared/enum/token-error.enum";

const env = yenv();

export class TokenService {
    static generateRefreshToken(): string {
        return uuidv4();
    }

    static generateAccessToken(user: Partial<UserModel>): string {
        const payload = {
            id: user.id,
            email: user.email,
            name: user.name,
            roles: user.roles,
            iat: moment().unix(),
            exp: moment().add(env.TOKEN.TIMEOUT, "seconds").unix(),
        };

        return jwt.encode(payload, env.TOKEN.KEYWORD);
    }

    static generateTokens(user: Partial<UserModel>): ITokens {
        const refreshToken = TokenService.generateRefreshToken();
        const accessToken = TokenService.generateAccessToken(user);

        return {
            accessToken,
            refreshToken,
        };
    }

    static validateAccessToken(
        accessToken: string
    ): Promise<ResponseValidateToken> {
        return new Promise((resolve, reject) => {
            try {
                const payload = jwt.decode(accessToken, env.TOKEN.KEYWORD);
                resolve(payload);
            } catch (error) {
                if (error.message.toLowerCase() === TOKEN_ERROR.TOKEN_EXPIRED) {
                    reject({ status: 409, message: TOKEN_ERROR_MESSAGE.TOKEN_EXPIRED });
                } else {
                    reject({ status: 401, message: TOKEN_ERROR_MESSAGE.TOKEN_INVALID });
                }
            }
        });
    }
}