import express from 'express';
import https from 'https';

import mongoose from 'mongoose';

import apiRouter from './routes/api';
import mongoExpressRouter from './routes/mongoexpress';

const app = express();

// app.use(auth);

export const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

const MONGO_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;


mongoose.connect(
  MONGO_URL,
  {useNewUrlParser: true},
  () => console.log(`Connected to database ${MONGO_DB} at ${MONGO_HOSTNAME}:${MONGO_PORT}`)
);


app.use('/api/v1', apiRouter);
app.use('/mongoexpress', mongoExpressRouter)


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