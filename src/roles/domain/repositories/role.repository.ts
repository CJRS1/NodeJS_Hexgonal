import { BaseRepository } from "../../../shared/domain/base-repository";
import { RoleEntity } from "../models/role.entity";
import { RoleModel } from "../models/role.model";

export interface RoleRepository extends BaseRepository<RoleModel, string> {
    /* Se implementa el findByIds de user.application */
    findByIds(ids: number[]): Promise<RoleEntity[]>;
}
