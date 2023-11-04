"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(application) {
        this.application = application;
        /* Forzando a que la clase siempre se Usercontroller */
        this.list = this.list.bind(this);
    }
    async list(req, res) {
        const users = await this.application.findAll();
        res.json(users);
    }
    async add(req, res) {
        const user = await this.application.add(req.body);
        res.json(user);
    }
    async update(req, res) {
        const user = await this.application.update(req.body);
        res.json(user);
    }
    async delete(req, res) {
        const user = await this.application.delete(req.params.id);
        res.json(user);
    }
    async findById(req, res) {
        const user = await this.application.findById(req.params.id);
        res.json(user);
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map