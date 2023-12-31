import Result from "./result.interface";
import { BaseRepository } from "../../../shared/domain/base-repository";
import { Trace } from "../../../shared/helpers/trace.helpers";
import { Logger } from "../../../shared/helpers/logging.helpers";
import { DTOAbstract } from "./dto/abstract.dto";

export class BaseApplication<T> {
    constructor(
        private repository: BaseRepository<T, number>,
        private dto: DTOAbstract<T> = null,
        private applicationName: string = null
    ) { }

    async add(entity: T): Promise<Result<T>> {
        /* Con esto se quita los campos que no debe de traer */
        const result = await this.repository.insert(entity);
        return this.dto.mapping(result);
    }

    async update(
        entity: T,
        where: object,
        relations: string[]
    ): Promise<Result<T>> {
        return await this.repository.update(entity, where, relations);
    }

    async delete(where: object): Promise<Result<T>> {
        const result = await this.repository.delete(where);
        return this.dto.mapping(result);
    }

    async findOne(where: object, relations: string[]): Promise<Result<T>> {
        const result = await this.repository.findOne(where, relations);
        return this.dto.mapping(result);
    }

    async findAll(
        where: { [s: string]: string | number | boolean },
        relations: string[],
        order: { [s: string]: string }
    ): Promise<Result<T>> {
        Logger.getLogger().info({
            typeElement: this.applicationName || "application",
            typeAction: "list",
            traceId: Trace.traceId(),
            message: "List all drivers",
            query: JSON.stringify({}),
            datetime: new Date(),
        });
        const result = await this.repository.findAll(where, relations, order);
        return this.dto.mapping(result);
    }

    async getPage(
        page: number,
        pageSize: number,
        where: { [s: string]: string | number | boolean },
        relations: string[],
        order: { [s: string]: string }
    ): Promise<Result<T>> {
        return await this.repository.getPage(
            page,
            pageSize,
            where,
            relations,
            order
        );
    }
}
