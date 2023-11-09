import Result from "src/shared/application/interface/result.interface";
import { BaseApplication } from "../../shared/application/interface/base.application";
import { UserModel } from "../domain/models/user.model";
import { UserDTO } from "./dto/dto";
import { UserRepository } from "../domain/repositories/user.repository";
import { RoleRepository } from "../../roles/domain/repositories/role.repository";



export class UserApplication extends BaseApplication<UserModel>{
    /* Para no usar dependencias ocultas usamos a UserRepository */
    constructor(
        private repositoryUser: UserRepository,
        private repositoryModel: RoleRepository
        ) {
        super(repositoryUser, new UserDTO(), "UserApplication");
    }

    /* Sobreescribiendo la funcion add */
    override async add(entity: UserModel): Promise<Result<UserModel>> {
        if (entity.roles.length > 0) {
            const roles = await this.repositoryModel.findByIds(
                entity.roles as number[]
            );
            console.log(roles);
            entity.roles = roles;
        } else {
            delete entity.roles;
        }

        const result = await this.repositoryUser.insert(entity);
        return new UserDTO().mapping(result);
    }

}