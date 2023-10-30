// import http from 'http';

import ServerBootstrap from './bootstrap/server.bootstrap';
import DatabaseBootstrap from './bootstrap/database.bootstrap';
/* El index.ts solo debe de iniciar el servidor */

/* Server es la puerta para que ingrese */
/* Los proyectos no deben de tener any, solo es como ejemplo */
// const server = http.createServer(app);/*  */
/* Todos los servicios usan un puerto, los menores a 3000 usan un puerto */
// server.listen(3000);/*  */
/* Tiene funcion de callback */
/* server.listen(3000, () => {
    console.log("Server is running in PORT : 3000")
}) */

/* Función autoincocada */
const serverBootstrap = new ServerBootstrap();
const databaseBootstrap = new DatabaseBootstrap();

(async () => {
    try {
        await serverBootstrap.initialize();
        await databaseBootstrap.initialize();
    } catch (err) {
        console.log(err);
    }
})();

/* Sirve para inicializar los servicios */
/* Se modifica si quiero añadir más servicios */
/* Responsabilidad única del SOLID */