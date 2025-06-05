import { Entity, Column } from 'typeorm';
@Entity()
export class PaymentMethods {
  
  @Column({ primary: true, generated: 'uuid' })
  id: string;
  @Column()
  user_id: string;
  @Column()
  stripe_id: string;
  @Column()
  is_default: boolean;
  @Column()
  type: string;
  @Column()
  payment_method_type: string;
  @Column({ nullable: true })
  card_type?: string;
  @Column({ nullable: true })
  last_four?: string;
  @Column({ nullable: true })
  expiration_date?: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;   
}
export class PaymentMethod {
  id: string;
  user_id: string;
  stripe_id: string;
  is_default: boolean;
  type: string;
  payment_method_type: string;
  card_type?: string;
  last_four?: string;
  expiration_date?: string;
  created_at: Date;
  updated_at: Date;
}