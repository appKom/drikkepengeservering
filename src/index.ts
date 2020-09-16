import express from 'express';
import https from 'https';
import { Pool } from 'pg'

import apiRouter from './routes/api';
import pgAdminRouter from './routes/pgAdmin';

const app = express();

// app.use(auth);

export const {
  PG_USER,
  PG_PASSWORD
} = process.env;

const dbPool = new Pool({
  user: PG_USER,
  password: PG_PASSWORD,
  database: 'olcoins',
  host: 'postgres',
  port: 5432
});

dbPool.connect()

app.use('/api/v1', apiRouter);
app.use('/pgadmin', pgAdminRouter)


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