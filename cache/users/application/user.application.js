"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserApplication = void 0;
class UserApplication {
    /* Para no usar dependencias ocultas usamos a UserRepository */
    constructor(repositoryUser) {
        this.repositoryUser = repositoryUser;
    }
    async add(user) {
        return await this.repositoryUser.insert(user);
    }
    async update(user) {
        return await this.repositoryUser.update(user);
    }
    async delete(id) {
        return await this.repositoryUser.delete(id);
    }
    async findById(id) {
        return await this.repositoryUser.findById(id);
    }
    async findAll() {
        return await this.repositoryUser.findAll();
    }
}
exports.UserApplication = UserApplication;
//# sourceMappingURL=user.application.js.map