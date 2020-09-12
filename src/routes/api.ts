import { Router, json } from 'express';
const apiRouter = Router();

apiRouter.use(json());

apiRouter.get('/balance', (req, res) => {
  res.send('');
});


// POST - /auth - Get auth token
// GET - /balance - gets user balance
// POST - /balance - updates balance
// PUT - /user - Puts a user into the db
// DELETE - /user - Deletes a user from the db

export default apiRouter;