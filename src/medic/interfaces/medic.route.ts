import express, {Request, Response} from 'express'
// import BaseRouter from '../../shared/interfaces/base.router';

const MedicRouter = express.Router();

MedicRouter.get('/', (req: Request , res: Response) => {
    res.send("medics");
})

export default MedicRouter

/* export default class extends BaseRouter{
    
} */