import { getConnection } from "typeorm";
import { User } from "../db/entity/User";

const createUser = async (userId: number) => {
    const user = new User();
    user.createdAt = Date.now();
    user.id = userId;
    user.balance = 0;
    user.transactions = [];
    await user.save();
}

const findUser = async (userId: number): Promise<User> => 
  await getConnection()
    .getRepository(User)
    .findOneOrFail(userId);

const deleteUser = async (userId: number) => {
  await getConnection()
    .getRepository(User)
    .delete(userId);
}

export { createUser, findUser, deleteUser }