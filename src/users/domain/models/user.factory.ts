import { PasswordService } from "../services/password.service"
import { TokenService } from "../services/token.service"
import { UserModel } from "./user.model"
// import { RefreshTokenVO } from "./value-objects/refresh-token.vo"
import * as bcrypt from "bcryptjs"

/* Validacion */
export interface IUser {
    id: number
    name: string
    lastname: string
    email: string
    password: string
    age: number
    refreshToken: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
    active: boolean
}

export class UserFactory {

    create(user: Partial<IUser>) {
        const id = user.id || 0;
        const name = user.name;
        const age = user.age;
        const lastname = user.lastname;
        const email = user.email;
        const password = PasswordService.hashPassword(user.password);
        const refreshToken = TokenService.generateRefreshToken();
        const createdAt = new Date();
        const updatedAt = new Date();
        const deletedAt = new Date();
        const active = user.active || true;


        // if (updatedAt < createdAt || deletedAt < createdAt) {
        //     throw new Error("Invalid date")
        // }

        if (name.trim() === "" || name.trim().length < 4) {
            throw new Error("Invalid name");
        }

        return new UserModel(
            id,
            name,
            lastname,
            email,
            password,
            age,
            refreshToken,
            createdAt,
            updatedAt,
            deletedAt,
            active
        )
    }
}