import { DataSource } from 'typeorm';
import DatabaseBootstrap from './bootstrap/database.interface';
import ServerBoostrap from './bootstrap/server.bootstrap'

const serverBootstrap = new ServerBoostrap();
const databaseBootstrap = new DatabaseBootstrap();

export interface Options {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    entities: string[];
    database: string;
    synchronize: boolean;
    logging: boolean;
}

(async () => {
    try {
        const tasks = [
            serverBootstrap.initialize(),
            databaseBootstrap.initialize(),
        ];
        const tasksCompleted = await Promise.all(tasks)

        const options: Options = Object.assign(
            {},
            (tasksCompleted[1] as DataSource).options
        ) as Options;
        console.log("Connected to database",
            options.database,
            options.host,
            options.port,
            options.logging);
    } catch (err) {
        console.error("Error", err);
    }
})()
