import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class project {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column({ length: 100 })
  name: String;

  //@Column({ length: })
}