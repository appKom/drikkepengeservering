import { Entity, Column, PrimaryColumn, OneToMany, BaseEntity, JoinTable } from "typeorm";
import { Transaction } from './Transaction';

@Entity()
export class User extends BaseEntity {

  @PrimaryColumn()
  id!: number;

  @OneToMany(() => Transaction, transaction => transaction.user, {cascade: true})
	@JoinTable()
  transactions!: Transaction[];

  @Column()
  balance!: number;

  @Column({ type: 'bigint' })
  createdAt!: number;
}
