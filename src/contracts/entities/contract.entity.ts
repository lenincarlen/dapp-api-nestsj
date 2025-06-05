import { ContractStatus, PaymentMethod } from '../dto/create-contract.dto';
import { Entity, Column } from 'typeorm';
@Entity()
export class Contracts { 
  @Column({ primary: true, generated: 'uuid' })
  id: string;
  @Column()
  owner_id: string;
  @Column()
  tenant_id: string;
  @Column()
  property_id: string;
  @Column()
  start_date: string;
  @Column()
  end_date: string;
  @Column()
  amount: number;
  @Column()
  payment_due_date: number;
  @Column()
  security_deposit: number | null;
  @Column()
  monthly_maintenance: number | null;
  @Column()
  payment_method: PaymentMethod;
  @Column()
  status: ContractStatus;
  @Column()
  created_at: string;
  @Column()
  updated_at: string; 

}
export class Contract {
  id: string;
  owner_id: string;
  tenant_id: string;
  property_id: string;
  start_date: string;
  end_date: string;
  amount: number;
  payment_due_date: number;
  security_deposit: number | null;
  monthly_maintenance: number | null;
  payment_method: PaymentMethod;
  status: ContractStatus;
  created_at: string;
  updated_at: string;
}