import express, {Request, Response} from 'express'
import BaseRouter from '../../shared/interfaces/base.router';

/* export default class extends BaseRouter{

} */

const UserRouter = express.Router();

UserRouter.get('/details', (req:Request, res:Response) => {
    const user = {
        name: 'Sergio',
        edad: 30,
    };
    res.json(user);
})

export default UserRouter

