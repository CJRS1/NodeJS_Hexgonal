/* Se puede usar este o el de interface.ts da igual */
export default abstract class Bootstrap {
    abstract initialize(): Promise<boolean | Error>;
}

export abstract class DatabaseListen extends Bootstrap{
    abstract listen():void;
}