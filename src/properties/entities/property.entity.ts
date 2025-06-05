import { Entity, Column } from 'typeorm';
@Entity()
export class Properties {
  @Column({ primary: true, generated: 'uuid' })
  id: string;
  @Column()
  property_name: string;
  @Column()
  address: string;
  @Column()
  owner_id: string;
  @Column()
  tenant_id: string;
  @Column()
  start_date: string;
  @Column()
  end_date: string;
  @Column()
  amount: number;

}
export class Property {
  id: string; // Asumiendo que tendrás un ID, usualmente generado por la BD
  property_name: string;
  address: string;
}