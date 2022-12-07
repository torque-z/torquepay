import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users'})
export class Users{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
