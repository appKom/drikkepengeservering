import { Entity, Column, PrimaryColumn, OneToMany, BaseEntity } from "typeorm";
import { Transaction } from './Transaction';

@Entity()
export class User extends BaseEntity {

  @PrimaryColumn()
  id!: number;

  @OneToMany(type => Transaction, transaction => transaction.userId)
  transactions!: Transaction[];

  @Column()
  balance!: number;

  @Column({ type: 'bigint' })
  createdAt!: number;
}