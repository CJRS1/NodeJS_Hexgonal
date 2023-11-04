"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import BaseRouter from '../../shared/interfaces/base.router';
const MedicRouter = express_1.default.Router();
MedicRouter.get('/', (req, res) => {
    res.send("medics");
});
exports.default = MedicRouter;
/* export default class extends BaseRouter{
    
} */ 
//# sourceMappingURL=medic.route.js.map