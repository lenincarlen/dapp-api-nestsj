import { Entity, Column } from 'typeorm';
@Entity()
export class Tenants {
  @Column({ primary: true, generated: 'uuid' })
  id: string;
  @Column()
  name: string;
  @Column()
  last_name: string;
  @Column()
  email: string;
  @Column({ type: 'enum', enum: ['ACTIVE', 'INACTIVE'], default: 'ACTIVE' })
  status: string; // TODO: Define TenantStatus enum and import it
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date; 

}
export class Tenant {
  id: string;
  name: string;
  last_name: string;
  email: string;
  status: string;
  created_at: Date;
  updated_at: Date; 
  
}

