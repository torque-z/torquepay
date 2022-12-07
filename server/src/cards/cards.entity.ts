import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'cards'})
export class Cards{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cardCompany: string;
  
  @Column()
  cardType: string;

  @Column()
  balance : number;

  @Column()
  cardNumber: number;


  @Column()
  expriyDate: string;
}
