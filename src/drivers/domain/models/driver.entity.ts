import { HistoryEntity } from '../../../history/domain/models/history.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "driver" })
export class DriverEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 50 })
    name: string;

    @Column({ type: "varchar", length: 50 })
    lastname: string;

    @Column({ type: "varchar", length: 50 })
    licenseDriver: string;

    @Column({ type: "boolean", default: true })
    active: boolean;

    @OneToMany(type => HistoryEntity, history => history.driver)
    histories: HistoryEntity[];
}