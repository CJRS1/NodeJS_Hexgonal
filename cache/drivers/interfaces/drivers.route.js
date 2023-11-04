"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import BaseRouter from '../../shared/interfaces/base.router';
const DriverRouter = express_1.default.Router();
DriverRouter.get('/', (req, res) => {
    res.send("drivers");
});
exports.default = DriverRouter;
/* export default class extends BaseRouter{
    
} */ 
//# sourceMappingURL=drivers.route.js.map