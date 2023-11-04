"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import BaseRouter from '../../shared/interfaces/base.router';
const HistoryRouter = express_1.default.Router();
HistoryRouter.get('/', (req, res) => {
    res.send("historys");
});
exports.default = HistoryRouter;
/* export default class extends BaseRouter{
    
} */ 
//# sourceMappingURL=history.route.js.map