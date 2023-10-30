/* Conexiones a base de datos o mensajería y quiero que tengan el mismo metodo entonces */
/* Esta es una interface */
export interface IBootstrap {
    initialize(): Promise<boolean | Error>
}