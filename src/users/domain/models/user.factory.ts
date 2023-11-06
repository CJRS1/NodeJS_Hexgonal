import { UserModel } from "./user.model"
import { RefreshTokenVO } from "./value-objects/refresh-token.vo"

/* Validacion */
export class UserFactory {
    id: number
    name: string
    lastname: string
    passwords: string
    age: number
    refreshToken: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
    active: boolean
    create(
        id: number,
        name: string,
        lastname: string,
        password: string,
        age: number,
        refreshToken: string,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date,
        active: boolean
    ) {
        if (updatedAt < createdAt || deletedAt < createdAt) {
            throw new Error("Invalid date")
        }

        if (name.trim() === "" || name.trim().length < 4) {
            throw new Error("Invalid name");
        }

        return new UserModel(
            id,
            name,
            lastname,
            password,
            age,
            RefreshTokenVO.create(refreshToken),
            createdAt,
            updatedAt,
            deletedAt,
            active
            )
    }
}