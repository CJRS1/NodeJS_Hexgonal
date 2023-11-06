import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { HistoryEntity } from '../../../history/domain/models/history.entity';

@Entity({ name: "user" })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 50 })
    name: string;

    @Column({ type: "varchar", length: 50 })
    lastname: string;

    @Column({ type: "integer", length: 50 })
    age: number;

    @Column({ type: "varchar", length: 150 })
    password: string;

    @Column({ type: "varchar", length: 100 })
    refreshToken: string;

    @Column({ type: "datetime" })
    createdAt: string;

    @Column({ type: "datetime" })
    updatedAt: string;

    @Column({ type: "datetime" })
    deletedAt: string;

    @Column({ type: "boolean", default: true })
    active: boolean;

}