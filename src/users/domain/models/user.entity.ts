import { RoleEntity } from 'src/roles/domain/models/role.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "user" })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 50 })
    name: string;

    @Column({ type: "varchar", length: 50 })
    lastname: string;

    @Column({ type: "integer"})
    age: number;

    @Column({ type: "varchar", length: 150 })
    email: string;

    @Column({ type: "varchar", length: 150 })
    password: string;

    @Column({ type: "varchar", length: 100 })
    refreshToken: string;

    @Column({ type: "datetime" })
    createdAt: string;

    @Column({ type: "datetime", nullable: true })
    updatedAt: string;

    @Column({ type: "datetime", nullable: true })
    deletedAt: string;

    @Column({ type: "boolean", default: true })
    active: boolean;

    @ManyToMany((type) => RoleEntity, (role) => role.users)
    @JoinTable()
    roles: RoleEntity[];
}