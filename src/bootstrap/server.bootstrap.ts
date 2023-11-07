import http from 'http'
import Bootstrap from './bootstrap';
import app from '../app';
import yenv from "yenv";

const env = yenv();

export default class ServerBoostrap extends Bootstrap {
    initialize(): Promise<boolean | Error> {
        return new Promise((resolve, reject) => {
            const server = http.createServer(app);
            server.listen(env.PORT)
                .on("listening", () => {
                    resolve(true);
                    console.log(`Listening on PORT  ${env.PORT}`)
                })
                .on("error", reject)
        })
    }
}

