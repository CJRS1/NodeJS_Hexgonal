"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const user_application_1 = require("../../application/user.application");
const user_infrastructure_1 = require("../../infrastructure/user.infrastructure");
const base_router_1 = require("../../../shared/interfaces/base.router");
/* Se inyecta */
const infrastructure = new user_infrastructure_1.UserInfrastructure();
const application = new user_application_1.UserApplication(infrastructure);
/* Usará los métodos que están en la aplicacion */
const userController = new user_controller_1.UserController(application);
class default_1 extends base_router_1.BaseRouter {
    constructor() {
        super(userController);
    }
    mountRoutes() { }
}
exports.default = default_1;
const router = express_1.default.Router();
router.get('/', userController.list);
router.post("/", userController.add);
router.put("/", userController.update);
router.delete("/:id", userController.delete);
router.get("/:id", userController.findById);
//# sourceMappingURL=user.routes.js.map