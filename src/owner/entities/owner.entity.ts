import { OwnerStatus } from '../dto/create-owner.dto'; // Reutilizando el enum
import { Entity, Column } from 'typeorm';

@Entity()
export class Owners {
  @Column({ primary: true, generated: 'uuid' })
  id: string;
  @Column()
  name: string;
  @Column()
  last_name: string;
  @Column()
  email: string;
  @Column({ type: 'enum', enum: OwnerStatus, default: OwnerStatus.ACTIVE })
  status: OwnerStatus;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}

export class Owner {
  id: string; // Asumiendo que tendrás un ID, usualmente generado por la BD
  name: string;
  last_name: string;
  email: string;
  properties?: string[]; // Array de IDs de propiedades
  contracts?: string[]; // Array de IDs de contratos
  earnings?: number;
  status?: OwnerStatus;
}