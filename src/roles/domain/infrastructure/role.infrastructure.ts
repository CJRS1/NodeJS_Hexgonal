import { BaseInfrastructure } from "src/shared/infrastructure/base-infrastructure";
import { RoleEntity } from "../models/role.entity";
import { RoleRepository } from "../repositories/role.repository";
import { RoleModel } from "../models/role.model";
import DatabaseBootstrap from "src/bootstrap/database.bootstrap";
import { In, Repository } from "typeorm";

export class RoleInfrastructure
    extends BaseInfrastructure<RoleModel>
    implements RoleRepository {
    constructor() {
        super(RoleEntity, "RoleInfrastructure");
    }

    async findByIds(ids: number[]): Promise<RoleEntity[]> {
        const dataSource = DatabaseBootstrap.dataSource;
        const repository: Repository<RoleEntity> =
            dataSource.getRepository(RoleEntity);

        return await repository.findBy({ id: In(ids) });
    }
}
