import { RentStatus } from '../dto/create-rent.dto';
import { Entity, Column } from 'typeorm';
@Entity()
export class Rents {
  @Column({ primary: true, generated: 'uuid' })
  id: string;
  @Column()
  contract_id: string;
  @Column()
  tenant_id: string;
  @Column()
  owner_id: string;
  @Column()
  property_id: string;
  @Column()
  amount: number;
  @Column() 
  monthly_maintenance?: number;
  @Column()
  due_date: string;
  @Column({ nullable: true })
  paid_at?: string;
  @Column({ type: 'enum', enum: RentStatus, default: RentStatus.PENDING })
  status: RentStatus;
  @Column({ nullable: true })
  payment_method?: string;
  @Column({ nullable: true })
  notes?: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
  @Column({ nullable: true })
  previous_balance?: number;
  @Column()
  total_due: number;  
  
}
export class Rent {
  id: string;
  contract_id: string;
  tenant_id: string;
  owner_id: string;
  property_id: string;
  amount: number;
  monthly_maintenance?: number;
  due_date: string;
  paid_at?: string;
  status: RentStatus;
  payment_method?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
  previous_balance?: number;
  total_due: number;
}