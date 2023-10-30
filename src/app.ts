/* Para las rutas necesitamos express */
import express, { Request, Response } from 'express';
import routesUser from './users/interface/user.route';
import routesDriver from './drivers/interface/driver.route';

const app = express();

/* cualquier ruta que venta con /users se va a ir a router */
/* /users es el padre entonces en el app.ts se tiene que modificar eso */
app.use("/users",routesUser);
app.use("/driver",routesDriver);

/* Solo puede haber un default por archivo */
export default app;

