import express from 'express';
import https from 'https';

import apiRouter from './routes/api';
import mongoExpressRouter from './routes/mongoexpress';

const app = express();

// app.use(auth);

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