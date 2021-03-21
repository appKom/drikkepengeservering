import Transaction from './Transaction';

type User = {
  id: string;
  transactions: Transaction[],
  balance: number,
  createdAt: number
};

export default User;