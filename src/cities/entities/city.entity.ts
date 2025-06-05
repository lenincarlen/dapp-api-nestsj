import { Entity, Column } from 'typeorm';
@Entity()
export class Cities {
  @Column({ primary: true, generated: 'uuid' })
  id: string;
  @Column()
  name: string;
  @Column()
  country_id: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}

export class City {
  id: string;
  name: string;
  country_id: string;
  created_at: Date;
  updated_at: Date;
}