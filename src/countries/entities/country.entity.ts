import { Entity, Column } from 'typeorm';
@Entity()
export class Countries {
  @Column({ primary: true, generated: 'uuid' })
  id: string;
  @Column()
  name: string;
  @Column()
  code: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
  
}
export class Country {
  id: string;
  name: string;
  code: string;
  created_at: string;
  updated_at: string;
}