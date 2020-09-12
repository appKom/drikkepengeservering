import { Router, json } from 'express';
import user from '../models/user';
const apiRouter = Router();

apiRouter.use(json());


apiRouter.get('/balance', (req, res) => {
  res.send('Got balance')
});

apiRouter.post('/user', (req, res) => {
  try {

    const theUser = new user({
      userId: req.body.userId,
      rfid: req.body.rfid,
      coins: 0,
      createAt: Date.now()
    });

    theUser.save();
    
    res.sendStatus(200);
  } catch (error) {
    res.status(500)
    res.send('Something went wrong');
  }
});


// POST - /auth - Get auth token
// GET - /balance - gets user balance
// POST - /balance - updates balance
// PUT - /user - Puts a user into the db
// DELETE - /user - Deletes a user from the db

export default apiRouter;