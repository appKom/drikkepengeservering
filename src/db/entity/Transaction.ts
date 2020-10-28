import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { User } from './User'

@Entity()
export class Transaction {

  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(type => User, user => user.transactions)
  userId: User;

  @Column()
  type: string;
  
  @Column()
  coins: number;
  
  @Column()
  date: string;
  
}