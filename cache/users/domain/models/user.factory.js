"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = void 0;
const user_model_1 = require("./user.model");
class UserFactory {
    create(user) {
        const id = user.id || 0;
        const name = user.name;
        const age = user.age;
        const lastname = user.lastname;
        const email = user.email;
        const password = user.password;
        const refreshToken = user.refreshToken;
        const createdAt = new Date();
        const updatedAt = new Date();
        const deletedAt = new Date();
        const active = user.active || true;
        if (updatedAt < createdAt || deletedAt < createdAt) {
            throw new Error("Invalid date");
        }
        if (name.trim() === "" || name.trim().length < 4) {
            throw new Error("Invalid name");
        }
        return new user_model_1.UserModel(id, name, lastname, email, password, age, refreshToken, createdAt, updatedAt, deletedAt, active);
    }
}
exports.UserFactory = UserFactory;
//# sourceMappingURL=user.factory.js.map