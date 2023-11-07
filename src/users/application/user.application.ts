import { BaseApplication } from "../../shared/application/interface/base.application";
import { UserModel } from "../domain/models/user.model";
import { UserRepository } from "../domain/repositories/user.repository";


export class UserApplication extends BaseApplication<UserModel>{
    /* Para no usar dependencias ocultas usamos a UserRepository */
    constructor(private repositoryUser: UserRepository) {
        super(repositoryUser);
    }


}