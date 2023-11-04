"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRouter = void 0;
const express_1 = __importDefault(require("express"));
class BaseRouter {
    constructor(controller) {
        this.controller = controller;
        this.expressRouter = express_1.default.Router();
        this.mountRoutesCommons();
        this.mountRoutes();
    }
    mountRoutesCommons() {
        this.expressRouter.get("/", this.controller.list);
        this.expressRouter.post("/", this.controller.add);
        this.expressRouter.put("/", this.controller.update);
        this.expressRouter.delete("/:id", this.controller.delete);
        this.expressRouter.get("/:id", this.controller.findById);
    }
}
exports.BaseRouter = BaseRouter;
//# sourceMappingURL=base.router.js.map