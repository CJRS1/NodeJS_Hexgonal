import http from 'http'
import Bootstrap from './bootstrap';
import app from '../app';

export default class ServerBoostrap extends Bootstrap{
    initialize(): Promise<boolean | Error> {
        return new Promise((resolve, reject) => {
            const server = http.createServer(app);
            server.listen(3000)
                .on("listening", () => { 
                    resolve(true);
                    console.log('Listening on PORT 3000') })
                .on("error", reject)
        })
    }
}

