import express, {Request, Response} from 'express'
import BaseRouter from '../../shared/interfaces/base.router';

const DriverRouter = express.Router();

DriverRouter.get('/', (req: Request , res: Response) => {
    res.send("drivers");
})

export default DriverRouter

/* export default class extends BaseRouter{
    
} */