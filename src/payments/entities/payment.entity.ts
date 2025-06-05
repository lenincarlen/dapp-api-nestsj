import { PaymentStatus } from '../dto/create-payment.dto';
import { Entity, Column } from 'typeorm';
@Entity()
export class Payments {
  @Column({ primary: true, generated: 'uuid' })
  id: string;
  @Column()
  contract_id: string;
  @Column()
  rent_id: string;
  @Column()
  tenant_id: string;
  @Column()
  owner_id: string;
  @Column()
  property_id: string;
  @Column({ nullable: true })
  stripe_session_id: string | null;
  @Column({ nullable: true })
  stripe_payment_intent: string | null;
  @Column()
  amount: number;
  @Column()
  currency: string;
  @Column({ type: 'enum', enum: PaymentStatus, default: PaymentStatus.PENDING })  
  status: PaymentStatus;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
  @Column({ type: 'jsonb', nullable: true })
  payment_history: PaymentHistoryEntry[] | null;    
      
}
interface PaymentHistoryEntry {
  date: string;
  event: string;
  details?: string;
}

export class Payment {
  id: string;
  contract_id: string;
  rent_id: string;
  tenant_id: string;
  owner_id: string;
  property_id: string;
  stripe_session_id: string | null;
  stripe_payment_intent: string | null;
  amount: number;
  currency: string;
  status: PaymentStatus;
  created_at: string;
  updated_at: string;
  payment_history: PaymentHistoryEntry[] | null;
}