import Result from "src/shared/application/interface/result.interface";
import { DriverModel } from "../../domain/models/driver.model";
import { DTOAbstract } from "src/shared/application/interface/dto/abstract.dto";

const FilterFieldActiveInDriver = (driver: DriverModel) => {
    const obj = Object.assign({}, driver);
    delete obj.active;
    return obj;
};

export interface CB<T> {
    cb(result: Result<T>): Result<T>;
}

export class DriverDTO extends DTOAbstract<DriverModel> {
    callback(result: Result<DriverModel>): Result<DriverModel> {
        const data = result.payload.data;

        if (Array.isArray(data)) {
            result.payload.data = data.map(FilterFieldActiveInDriver);
        } else {
            delete (result.payload.data as DriverModel).active;
        }

        return result;
    }
}
