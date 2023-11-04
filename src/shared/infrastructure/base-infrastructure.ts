export abstract class BaseInfrastructure<T,U> {
    update(driver: T): Promise<T> {
        throw new Error("Method not implemented.");
    }
    delete(id: U): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    findById(id: U): Promise<T> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    insert(driver: T): Promise<T>{
        return Promise.resolve(driver);
    }
}