import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, BaseEntity } from "typeorm";
import { User } from './User'

@Entity()
export class Transaction extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, user => user.transactions, {onDelete: "CASCADE"})
  user!: User;

  @Column()
  coins!: number;

  @Column({ type: 'bigint' })
  date!: number;
}
