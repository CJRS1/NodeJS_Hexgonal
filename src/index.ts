import DatabaseBootstrap from './bootstrap/database.interface';
import ServerBoostrap from './bootstrap/server.bootstrap'

const serverBoostrap = new ServerBoostrap();
const databaseBootstrap = new DatabaseBootstrap();

(async () => {
    try {
        await serverBoostrap.initialize();
        await databaseBootstrap.initialize();
    } catch (err) {
        console.error(err);
    }
})()
