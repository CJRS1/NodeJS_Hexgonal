"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = void 0;
const user_model_1 = require("./user.model");
const refresh_token_vo_1 = require("./value-objects/refresh-token.vo");
/* Validacion */
class UserFactory {
    create(id, name, lastname, age, refreshToken, createdAt, updatedAt, deletedAt) {
        if (updatedAt < createdAt || deletedAt < createdAt) {
            throw new Error("Invalid date");
        }
        if (name.trim() === "" || name.trim().length < 4) {
            throw new Error("Invalid name");
        }
        return new user_model_1.UserModel(id, name, lastname, age, refresh_token_vo_1.RefreshTokenVO.create(refreshToken), createdAt, updatedAt, deletedAt);
    }
}
exports.UserFactory = UserFactory;
//# sourceMappingURL=user.factory.js.map