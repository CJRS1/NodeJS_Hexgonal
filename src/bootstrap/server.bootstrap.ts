import http from 'http';
import app from '../app';
import Bootstrap from './bootstrap';

export default class ServerBootstrap extends Bootstrap{
    /* método que inicialice el servidor */
    /* Indica que devuelve la promesa un booleano o error */
    initialize(): Promise<boolean | Error> {
        return new Promise((resolve, reject) => {
            const server = http.createServer(app);
            server
                .listen(3000)
                .on("listening", () => {resolve(true);console.log("Server is listening on port 3000")})
                .on("error", reject);
                /* Funcion recibe para metro tipo err, entonces mejor solo lo dejamos como una funcion de reject */
        })
    }
}