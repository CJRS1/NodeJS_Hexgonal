/* Usar import en todo */
import express, {Response, Request} from 'express';

const routerUser = express.Router();

routerUser.get("/detail", (req: Request, res: Response) => {
    const user = {
        name: "Sergio",
        age: 30
    }
    res.json(user);
})

routerUser.get("/", (req: Request, res: Response) => {
    const user = [{
        name: "John",
        age: 30
    },
    {
        name: "John",
        age: 34
    },
    {
        name: "John",
        age: 45
    }
    ]
    res.json(user);
})

export default routerUser;