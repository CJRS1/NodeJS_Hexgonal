import express, {Response, Request} from 'express';

const routeDriver = express.Router();

routeDriver.get("/", (req: Request, res: Response) => {
    res.send("driver");
})

export default routeDriver;