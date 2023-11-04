"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./users/interfaces/http/user.routes"));
const drivers_route_1 = __importDefault(require("./drivers/interfaces/drivers.route"));
/* const app = express();
 */
/* app.use("/users",UserRouter)
app.use("/drivers",DriverRouter) */
// export default app;
class App {
    constructor() {
        this.expressApp = (0, express_1.default)();
        /* Se llama al mountRouter sino no funciona */
        this.mountRouter();
        this.mountHealthCheck();
    }
    mountRouter() {
        this.expressApp.use("/users", new user_routes_1.default().expressRouter);
        this.expressApp.use("/drivers", drivers_route_1.default);
    }
    mountHealthCheck() {
        this.expressApp.get('/', (req, res) => {
            res.send("All is good!");
        });
        this.expressApp.get('/healthcheck', (req, res) => {
            res.send("All is good!");
        });
    }
}
exports.default = new App().expressApp;
//# sourceMappingURL=app.js.map