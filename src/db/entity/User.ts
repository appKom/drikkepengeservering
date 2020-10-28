import { Entity, Column, PrimaryColumn, OneToMany} from "typeorm";
import { Transaction } from './Transaction';

@Entity()
export class User{

  @PrimaryColumn()
  id: number;

  @OneToMany(type => Transaction, transaction => transaction.userId)
  transactions: Transaction[];

  @Column()
  balance: number;

  @Column()
  createdAt: string;

}