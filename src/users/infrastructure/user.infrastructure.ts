import { UserModel } from "../domain/models/user.model"
import { UserRepository } from "../domain/repositories/user.repository";


export class UserInfrastructure implements UserRepository{
        update(user: UserModel): Promise<UserModel> {
            throw new Error("Method not implemented.");
        }
        delete(id: string): Promise<boolean> {
            throw new Error("Method not implemented.");
        }
        findById(id: string): Promise<UserModel> {
            throw new Error("Method not implemented.");
        }
        findAll(): Promise<UserModel[]> {
            throw new Error("Method not implemented.");
        }
        insert(user: UserModel): Promise<UserModel>{
            return Promise.resolve(user);
        }
}