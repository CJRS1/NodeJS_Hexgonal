"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRouter = void 0;
const express_1 = __importDefault(require("express"));
const errors_helper_1 = require("../helpers/errors.helper");
class BaseRouter {
    constructor(controller) {
        this.controller = controller;
        this.expressRouter = express_1.default.Router();
        this.mountRoutesCommons();
        this.mountRoutes();
    }
    mountRoutesCommons() {
        this.expressRouter.get("/", errors_helper_1.HandlerErrors.catchError(this.controller.list));
        this.expressRouter.post("/", errors_helper_1.HandlerErrors.catchError(this.controller.add));
        this.expressRouter.put("/:id", errors_helper_1.HandlerErrors.catchError(this.controller.update));
        this.expressRouter.delete("/:id", errors_helper_1.HandlerErrors.catchError(this.controller.delete));
        this.expressRouter.get("/:id", errors_helper_1.HandlerErrors.catchError(this.controller.listOne));
        /*this.expressRouter.get("/:id", this.controller.findById); */
    }
}
exports.BaseRouter = BaseRouter;
//# sourceMappingURL=base.router.js.map