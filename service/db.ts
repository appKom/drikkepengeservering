import { CosmosClient } from "@azure/cosmos";
import User from "../types/User";

const { DB_URI, DB_KEY } = process.env;

const Users = {
  async init() {
    try {
      this.client = new CosmosClient({ endpoint: DB_URI, key: DB_KEY });

      this.database = await this.client.databases
        .createIfNotExists({id: "olcoins"})
        .then(({ database }) => database);

      this.container = await this.database.containers
        .createIfNotExists({id: "users"})
        .then(({ container }) => container);

    } catch (err) {
      console.error(err.message);
    }
  },

  async create(id: string): Promise<User> {
    const { resource } = await this.container.items.create({
      id: id,
      transactions: [],
      balance: 0,
      createdAt: Date.now()
    });
    return resource;
  },

  async get(id: string): Promise<User> {
    const { resource } = await this.container.item(id, id).read();
    return resource;
  },

  async update(user: User): Promise<User> {
    const { resource } = 
      await this.container.item(user.id, user.id).replace(user);
    return resource;
  },

  async delete(id: string): Promise<void> {
    await this.container.item(id, id).delete();
  }
};

Users.init();

export default Users;