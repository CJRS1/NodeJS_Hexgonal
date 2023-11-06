import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DriverEntity } from '../../../drivers/domain/models/driver.entity';

@Entity({ name: "history" })
export class HistoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100 })
    namePatient: string;
    
    @ManyToOne((type) => DriverEntity, (driver) => driver.histories)
    driver: DriverEntity;
}