import express, { Application, Request, Response } from 'express'
import RoutesUser from './users/interfaces/http/user.routes';
import RoutesDriver from "./drivers/interfaces/drivers.route";
import RoutesAuth from "./auth/interfaces/auth.route";
import { HandlerErrors } from './shared/helpers/errors.helper';
// import { v4 as uuidv4 } from "uuid";

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
        /* El orden importa */
        this.mountMiddlewares();
        /* Se llama al mountRouter sino no funciona */
        this.mountRouter();
        this.mountHealthCheck();
        /* Manejo de errores siempre va al final */
        this.mountErrors();
    }

    mountMiddlewares(): void {
        this.expressApp.use(express.json());
        this.expressApp.use(express.urlencoded({ extended: true }));
        // request.body
        // this.expressApp.use((req, res, next) => {
        //     req.traceId = uuidv4(); // Usar 'as any' para evitar errores de tipos
        //     next();
        // });

    }

    mountRouter(): void {
        this.expressApp.use("/users", new RoutesUser().expressRouter)
        this.expressApp.use("/drivers", new RoutesDriver().expressRouter);
        this.expressApp.use("/auth", new RoutesAuth().expressRouter);
    }

    mountHealthCheck(): void {
        this.expressApp.get('/', (req: Request, res: Response) => {
            res.send("All is good!");
        });
        this.expressApp.get('/healthcheck', (req: Request, res: Response) => {
            res.send("All is good!")
        })
    }
    // /* Viene de helpers */
    mountErrors() {
        this.expressApp.use(HandlerErrors.notFound);
        this.expressApp.use(HandlerErrors.generic);
    }
}

export default new App().expressApp 