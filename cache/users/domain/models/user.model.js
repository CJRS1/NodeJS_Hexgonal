"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
class UserModel {
    constructor(id, name, lastname, age, refreshToken, createdAt, updatedAt, deletedAt) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.refreshToken = refreshToken;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map