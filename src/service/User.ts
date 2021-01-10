import { getConnection } from "typeorm";
import { User } from "../db/entity/User";
import { Transaction } from "../db/entity/Transaction";

class UserExistsError extends Error {
	constructor(message: string) {
    super(message);
    this.name = "UserExistsError";
  }
}

class UserNotFoundError extends Error {
	constructor(message: string) {
    super(message);
    this.name = "UserNotFoundError";
  }
}

class BalanceNotSufficientError extends Error {
	constructor(message: string) {
    super(message);
    this.name = "BalanceNotSufficientError";
  }
}


const createUser = async (userId: number) => {
	
	if (await User.findOne(userId) != undefined)
		throw new UserExistsError('User already exists');

  const user = User.create({
		id: userId,
		balance: 0,
		transactions: [],
		createdAt: Date.now()
	});

  await user.save();
}


const findUser = async (userId: number): Promise<User|undefined> => 
  await User.findOneOrFail(userId)
    .catch(() => {throw new UserNotFoundError(`Couldn\'t find user ${userId}`)});


const addTransaction = async (userId: number, coins: number) => {
	const user = await User.findOneOrFail(userId, {relations: ['transactions']})
    .catch(() => {throw new UserNotFoundError(`Couldn\'t find user ${userId}`)});

	const transaction = Transaction.create({
		user: user,
		coins: coins,
		date: Date.now()
	});

	if (user.balance + transaction.coins < 0)
		throw new BalanceNotSufficientError('Balance not sufficient');

	user.balance += coins;
	user.transactions.push(transaction);
	await user.save();
}


const deleteUser = async (userId: number) =>{
  const user = await User.findOneOrFail(userId)
    .catch(() => {throw new UserNotFoundError(`Couldn\'t find user ${userId}`)});
	// await user.transactions?.forEach(transaction => Transaction.delete(transaction.id));
	await User.delete(userId);
}

export { createUser, findUser, deleteUser, addTransaction, UserExistsError, UserNotFoundError, BalanceNotSufficientError }
