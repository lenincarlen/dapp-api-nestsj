import { Entity, Column } from 'typeorm';
@Entity()
export class PropertyTypes {
  @Column({ primary: true, generated: 'uuid' })
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date; 

}


export class PropertyType {
  id: string;
  name: string;
  description?: string;
  created_at: string;
  updated_at: string;
}