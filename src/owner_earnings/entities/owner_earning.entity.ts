import { EarningStatus } from '../dto/create-owner_earning.dto';
import { Entity, Column } from 'typeorm';
@Entity()
export class OwnerEarnings {
  @Column({ primary: true, generated: 'uuid' })
  id: string;
  @Column()
  owner_id: string;
  @Column()
  property_id: string;
  @Column()
  payment_id: string;
  @Column()
  tenant_id: string;
  @Column()
  amount: number;
  @Column()
  fee_amount: number;
  @Column()
  net_amount: number;
  @Column()
  currency: string;
  @Column({ type: 'enum', enum: EarningStatus, default: EarningStatus.PENDING })
  status: EarningStatus;
  @Column({ nullable: true })
  stripe_transfer_id?: string;
  @Column({ nullable: true })
  description?: string; 
  @Column({ type: 'timestamp', nullable: true })
  processed_at?: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date; 
}
export class OwnerEarning {
  id: string;
  owner_id: string;
  property_id: string;
  payment_id: string;
  tenant_id: string;
  amount: number;
  fee_amount: number;
  net_amount: number;
  currency: string;
  status: EarningStatus;
  stripe_transfer_id?: string;
  description?: string;
  processed_at?: Date;
  created_at: Date;
  updated_at: Date;
}