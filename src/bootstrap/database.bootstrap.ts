import Bootstrap, {DatabaseListen} from "./bootstrap";

export default class DatabaseBootstrap extends DatabaseListen{
    /* Creeé una clase más para otra clase que extienda de la clase base, si necesito más cosas lo extiendo de la clase base */
    listen(): void {
        throw new Error("Method not implemented");
    }
    initialize(): Promise<boolean | Error> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
                console.log("Connectec to Database");
            },2000)
        })
    }
}