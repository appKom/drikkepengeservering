import { Connection, createConnection } from "typeorm";
import express from 'express';
import https from 'https';

import apiRouter from './routes/api';
import pgAdminRouter from './routes/pgAdmin';

import ormConfig from './db/ormconfig'
import { User } from "./db/entity/User";

createConnection(ormConfig)
  .then(async (connection: Connection) => {
  console.log('Successfully connected to database!');

  const app = express();
  // app.use(auth);

  app.use('/api/v1', apiRouter);
  app.use('/pgadmin', pgAdminRouter);

  const HOSTNAME = process.env.NODE_HOSTNAME;
  const PORT = process.env.NODE_PORT || 8080;

  app.listen(
    PORT,
    () => console.log(`Server listening at ${HOSTNAME}:${PORT}`)
  );

  // https.createServer(
  //   {
  //     cert: '',
  //     key: ''
  //   }, app).listen(5000);

}).catch((error: Error) => console.log(error));