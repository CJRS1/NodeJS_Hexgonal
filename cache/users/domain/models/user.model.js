"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
class UserModel {
    constructor(id, name, lastname, password, age, refreshToken, createdAt, updatedAt, deletedAt, active) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.password = password;
        this.age = age;
        this.refreshToken = refreshToken;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
        this.active = active;
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map