import express,{ Request, Response } from 'express';

const app = express();

// app.use(auth);

app.get('/api/v1/', (req: Request, res: Response) => {
  res.send('');
});

// POST - /auth - Get auth token
// GET - /balance - gets user balance
// POST - /balance - updates balance
// PUT - /user - Puts a user into the db
// DELETE - /user - Deletes a user from the db

const HOSTNAME = process.env.NODE_HOSTNAME;
const PORT = process.env.NODE_PORT || 8080

app.listen({
  port: PORT, 
  callback: () => console.log(`Server listening at ${HOSTNAME}:${PORT}`)
});