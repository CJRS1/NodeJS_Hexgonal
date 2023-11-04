import express, {Request, Response} from 'express'
// import BaseRouter from '../../shared/interfaces/base.router';

const HistoryRouter = express.Router();

HistoryRouter.get('/', (req: Request , res: Response) => {
    res.send("historys");
})

export default HistoryRouter

/* export default class extends BaseRouter{
    
} */