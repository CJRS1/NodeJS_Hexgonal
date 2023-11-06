"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const drivers_route_1 = __importDefault(require("./drivers/interfaces/drivers.route"));
const uuid_1 = require("uuid");
/* const app = express();
 */
/* app.use("/users",UserRouter)
app.use("/drivers",DriverRouter) */
// export default app;
class App {
    constructor() {
        this.expressApp = (0, express_1.default)();
        /* El orden importa */
        this.mountMiddlewares();
        /* Se llama al mountRouter sino no funciona */
        this.mountRouter();
        this.mountHealthCheck();
    }
    mountMiddlewares() {
        this.expressApp.use(express_1.default.json());
        this.expressApp.use(express_1.default.urlencoded({ extended: true })); // request.body
        this.expressApp.use((req, res, next) => {
            req.traceId = (0, uuid_1.v4)(); // Usar 'as any' para evitar errores de tipos
            next();
        });
    }
    mountRouter() {
        // this.expressApp.use("/users", new RoutesUser().expressRouter)
        this.expressApp.use("/drivers", new drivers_route_1.default().expressRouter);
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