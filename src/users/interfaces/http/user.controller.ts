import { Request, Response } from "express"
import { UserApplication } from "../../application/user.application";

export class UserController {
    constructor(private application: UserApplication) {
        /* Forzando a que la clase siempre se Usercontroller */
        this.list = this.list.bind(this);
    }
    async list(req: Request, res: Response) {
        const users = await this.application.findAll();
        res.json(users);
    }

    async add(req: Request, res: Response) {
        const user = await this.application.add(req.body);
        res.json(user);
    }

    async update(req: Request, res: Response) {
        const user = await this.application.update(req.body);
        res.json(user);
    }

    async delete(req: Request, res: Response) {
        const user = await this.application.delete(req.params.id);
        res.json(user);
    }

    async findById(req: Request, res: Response) {
        const user = await this.application.findById(req.params.id);
        res.json(user);
    }
}