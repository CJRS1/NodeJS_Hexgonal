import { ObjectType, Repository } from "typeorm";
import DatabaseBootstrap from "../../bootstrap/database.bootstrap";
import * as _ from "lodash"
import Result from "../application/interface/result.interface";
import { ResponseDto } from "../application/interface/dto/response.dto";
import { Trace } from "../helpers/trace.helpers";


export abstract class BaseInfrastructure<T> {

    constructor(private entity: ObjectType<T>) { }

    async update(
        entity: Partial<T>,
        where: object,
        relations: string[] = []
    ): Promise<Result<T>> {
        const dataSource = DatabaseBootstrap.dataSource;
        const repository: Repository<T> = dataSource.getRepository(this.entity)
        let recordToUpdate: any = await repository.findOne({
            where,
            relations,
        });
        /* Loash es para que actualice determinados campos no todos */
        recordToUpdate = _.merge(recordToUpdate, entity);
        await repository.save(recordToUpdate)

        return ResponseDto<T>(Trace.traceId,recordToUpdate);
    }
    async delete(
        where: object
    ): Promise<Result<T>> {
        const dataSource = DatabaseBootstrap.dataSource;
        const repository: Repository<T> = dataSource.getRepository(this.entity)
        let recordToDelete: any = await repository.findOne({
            where,
        })
        recordToDelete = _.merge(recordToDelete, { active: false })
        await repository.save(recordToDelete)
        return ResponseDto<T>(Trace.traceId,recordToDelete);
    }

    async findOne(
        where: object = {},
        relations: string[] = []
    ): Promise<Result<T>> {
        const dataSource = DatabaseBootstrap.dataSource;
        const repository: Repository<T> = dataSource.getRepository(this.entity)
        const data: T = await repository.findOne({ where, relations })
        return ResponseDto<T>(Trace.traceId,data);
    }
    /* Valor por defecto se el da al findAll vario por si no se envia nada */
    async findAll(
        where: object = {},
        relations: string[] = [],
        order: object = {}
    ): Promise<Result<T>> {
        const dataSource = DatabaseBootstrap.dataSource;
        const repository: Repository<T> = dataSource.getRepository(this.entity)

        const _where = Object.assign(where, { active: true });

        const data: T[] = await repository.find({
            where: _where,
            relations,
            order,
        });
        return ResponseDto<T>(Trace.traceId,data);
    }

    async insert(entity: T): Promise<Result<T>> {
        const dataSource = DatabaseBootstrap.dataSource;
        const repository: Repository<T> = dataSource.getRepository(this.entity)
        const instance = repository.create(entity)
        const data: T = await repository.save(instance)
        return ResponseDto<T>(Trace.traceId,data);
    }

    async getPage(
        page: number,
        pageSize: number,
        where: object = {},
        relations: string[] = [],
        order: object = {}
    ): Promise<Result<T>> {
        const dataSource = DatabaseBootstrap.dataSource;
        const repository: Repository<T> = dataSource.getRepository(this.entity);
        const [data, total] = await repository.findAndCount({
            where,
            relations,
            order,
            skip: page * pageSize,
            take: pageSize,
        });

        return ResponseDto<T>(Trace.traceId, data, total);
    }
}