import express from 'express';

import apiRouter from './routes/api';
import mongoExpressRouter from './routes/mongoexpress';

const app = express();

// app.use(auth);

app.use('/api/v1', apiRouter);
app.use('/mongoexpress', mongoExpressRouter)


const HOSTNAME = process.env.NODE_HOSTNAME;
const PORT = process.env.NODE_PORT || 8080;

app.listen({
  port: PORT, 
  callback: () => console.log(`Server listening at ${HOSTNAME}:${PORT}`)
});