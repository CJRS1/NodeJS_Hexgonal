/* Para las rutas necesitamos express */
import express, { Request, Response } from 'express';

const app = express();

app.get("/users/detail", (req: Request, res: Response) => {
    const user = {
        name: "Sergio",
        age: 30
    }
    // res.status(200).type("application/json").send(JSON.stringify(user));
    /* No es necesario poner el status */
    // res.type("application/json").send(JSON.stringify(user));
    res.json(user);
})


app.get("/users", (req: Request, res: Response) => {
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
    // res.status(200).type("application/json").send(JSON.stringify(user));
    /* No es necesario poner el status */
    // res.type("application/json").send(JSON.stringify(user));
    res.json(user);
})

/* Solo puede haber un default por archivo */
export default app;

/* Archivo para manejar las rutas */
/* Incluso se debe de usar el administrador de rutas */
// const paths: { [s: string]: any } = {
//     "/user/details": (req: any, res: any) => {
//         const user = {
//             name: "Sergio",
//             age: 30
//         }
//         /* Lo que le estoy enviando es un JSON */
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         /* Siempre se le debe de enviar un string y para que lo interprete como un JSON */
//         /* Devuelve el JSON */
//         res.end(JSON.stringify(user));
//     },
//     "/users": (req: any, res: any) => {
//         const user = [{
//             name: "John",
//             age: 30
//         },
//         {
//             name: "John",
//             age: 34
//         },
//         {
//             name: "John",
//             age: 45
//         }
//         ]
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         /* Siempre se le debe de enviar un string y para que lo interprete como un JSON */
//         /* Devuelve el JSON */
//         res.end(JSON.stringify(user));
//     }
// }

// const app = (req: any, res: any) => {
//         /* Para usar paths */
//         if (paths[req.url?.toLowerCase()]) {
//             /* Modo imperativo (demuestra que hace) y desclarativo(dice que hacer o que se va a hacer) */
//             paths[req.url?.toLowerCase()](req, res);
//         }
//         /* Si quiero tener respuestas diferentes tengo que añadir rutas, req.url devuelve el url y siemrpe devuelve favicon.icop */
//         // console.log(req.url);
//         // if (req.url?.toLowerCase() === "/user/details") {
//         // const user = {
//         //     name: "John",
//         //     age: 30
//         // }
//         /* Lo que le estoy enviando es un JSON */
//         // res.writeHead(200, { 'Content-Type': 'application/json' });
//         /* Siempre se le debe de enviar un string y para que lo interprete como un JSON */
//         /* Devuelve el JSON */
//         // res.end(JSON.stringify(user));
//         // } else if (req.url?.toLowerCase() === "/users") {
//         // const user = [{
//         //     name: "John",
//         //     age: 30
//         // },
//         // {
//         //     name: "John",
//         //     age: 34
//         // },
//         // {
//         //     name: "John",
//         //     age: 45
//         // }
//         // ]
//         // res.writeHead(200, { 'Content-Type': 'application/json' });
//         /* Siempre se le debe de enviar un string y para que lo interprete como un JSON */
//         /* Devuelve el JSON */
//         // res.end(JSON.stringify(user));
//         // }
//         else {
//             /* 200 respuesta */
//             /* Estado de lo que se recoge, texto plano, cualquier texto que yo quiera(text/plain) */
//             res.writeHead(200, { 'Content-Type': "text/plain" });
//             /* Primera respuesta */
//             res.write("Response from server");
//             /* Segunda respuesta */
//             res.write("That is ok");
//             res.write("El servidor funciona mi compa");
//             /* Despedida con el método end */
//             /* No se puede tener dos end */
//             res.end();
//         }
//         const method = req.method;
//         /* Método GET se obteine por defecto */
//         console.log(method);
// }



// export default app