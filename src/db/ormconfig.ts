import { ConnectionOptions } from "typeorm";

const {
  PG_USER,
  PG_PASSWORD,
  PG_DB
} = process.env

const ormConfig: ConnectionOptions = {
  name: 'default',
  host: 'postgres',
  type: 'postgres',
  database: PG_DB || '',
  username: PG_USER || '',
  password: PG_PASSWORD || '',
  port: 5432,
  synchronize: true,
  logging: false,
  migrationsTableName: 'migrations',
  entities: [
    'src/db/entity/**/*.ts'
  ],
  migrations: [
    'src/db/migration/**/*.ts'
  ],
  subscribers: [
    'src/db/subscriber/**/*.ts'
  ],
  cli: {
    entitiesDir: 'src/db/entity',
    migrationsDir: 'src/db/migration',
    subscribersDir: 'src/db/subscriber'
  }
};

export default ormConfig;
