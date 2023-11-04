import { UserModel } from "./user.model"
import { RefreshTokenVO } from "./value-objects/refresh-token.vo"

/* Validacion */
export class UserFactory {
    id: number
    name: string
    lastname: string
    age: number
    refreshToken: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
    create(
        id: number,
        name: string,
        lastname: string,
        age: number,
        refreshToken: string,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date
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
            age,
            RefreshTokenVO.create(refreshToken),
            createdAt,
            updatedAt,
            deletedAt
            )
    }
}