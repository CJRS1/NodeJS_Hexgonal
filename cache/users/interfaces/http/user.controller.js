"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const logging_helpers_1 = require("../../../shared/helpers/logging.helpers");
const trace_helpers_1 = require("../../../shared/helpers/trace.helpers");
const user_factory_1 = require("../../../users/domain/models/user.factory");
class UserController {
    constructor(application) {
        this.application = application;
        this.list = this.list.bind(this);
        this.listOne = this.listOne.bind(this);
        this.add = this.add.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    async list(req, res) {
        logging_helpers_1.Logger.getLogger().info({
            typeElement: "UserController",
            typeAction: "list",
            traceId: trace_helpers_1.Trace.traceId(),
            message: "List all users",
            query: JSON.stringify({}),
            datetime: new Date(),
        });
        const users = await this.application.findAll({}, [], {});
        res.json(users);
    }
    async listOne(req, res) {
        // const logger = new Logger();
        trace_helpers_1.Trace.traceId(true);
        const users = await this.application.findOne({ id: +req.params.id }, []);
        res.json(users);
    }
    async add(req, res) {
        trace_helpers_1.Trace.traceId(true);
        const user = new user_factory_1.UserFactory().create(req.body);
        const result = await this.application.add(user);
        res.json(result);
    }
    async update(req, res) {
        trace_helpers_1.Trace.traceId(true);
        const userToInsert = { id: req.params.id, ...req.body };
        const user = new user_factory_1.UserFactory().create(userToInsert);
        const result = await this.application.update(user, {}, []);
        res.json(result);
    }
    async delete(req, res) {
        trace_helpers_1.Trace.traceId(true);
        const id = +req.params.id;
        const users = await this.application.delete({ id });
        res.json(users);
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map