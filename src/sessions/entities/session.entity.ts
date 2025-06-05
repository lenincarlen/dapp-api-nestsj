import { Entity, Column } from 'typeorm';
@Entity ()
export class Sessions {
  @Column({ primary: true, generated: 'uuid' })
  id: string;
  @Column({ nullable: true })
  user_id?: string;
  @Column()
  ip_address: string;
  @Column()
  user_agent: string;
  @Column()
  payload: string;      
  @Column()
  last_activity: number; // Unix timestamp
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}

export class Session {
  id: string;
  user_id?: string;
  ip_address: string;
  user_agent: string;
  payload: string;
  last_activity: number; // Unix timestamp
  created_at: Date;
  updated_at: Date;
}