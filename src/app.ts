import express, { Application, Request, Response } from 'express'
import RoutesUser from './users/interfaces/http/user.routes';
import RoutesDriver from "./drivers/interfaces/drivers.route";

/* const app = express();
 */
/* app.use("/users",UserRouter)
app.use("/drivers",DriverRouter) */

// export default app;
class App {
    /* Creo una variable de tipo Application */
    expressApp: Application;

    constructor() {
        this.expressApp = express();
        /* Se llama al mountRouter sino no funciona */
        this.mountRouter();
        this.mountHealthCheck();
    }

    mountRouter(): void {
        this.expressApp.use("/users", new RoutesUser().expressRouter)
        this.expressApp.use("/drivers", new RoutesDriver().expressRouter);
    }

    mountHealthCheck(): void {
        this.expressApp.get('/', (req: Request, res: Response) => {
            res.send("All is good!");
        });
        this.expressApp.get('/healthcheck', (req: Request, res: Response) => {
            res.send("All is good!")
        })
    }
}

export default new App().expressApp 