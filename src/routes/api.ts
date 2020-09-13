import { Router, json } from 'express';
import user from '../models/user';
const apiRouter = Router();

apiRouter.use(json());
//apiRouter.use(auth());

apiRouter.post('/user', (req, res) => {
  try {
    console.log(`POST: user/${req.body.userId}`);

    const newUser = new user({
      userId: req.body.userId,
      coins: 0
    });

    newUser.save();
    res.sendStatus(200);

  } catch (error) {
    console.log(`ERROR: ${error.message}`);
    res.status(500)
    res.send('Something went wrong');
  }
});

apiRouter.get('/user/:userId', (req, res) => {
  try {
    console.log(`GET: user/${req.params.userId}`);
    
    const returnable = user.findOne({'userId': req.params.userId});
    console.log(returnable);
    
    res.send(returnable);

  } catch (error) {
    console.log(`ERROR: ${error.message}`);
    res.status(500)
    res.send('Something went wrong');
  }
});

apiRouter.put('/user/:userId', (req, res) => {
  try {
    
    // TODO: Save the updated values?
    user.findOneAndUpdate(
      {"userId": req.query.userId},
      {'coins': req.body.coins}
    );

    res.sendStatus(200);

  } catch (error) {
    console.log(`ERROR: ${error.message}`);
    res.status(500)
    res.send('Something went wrong');
  }
});


// POST - /auth - Get auth token
// DELETE - /user - Deletes a user from the db

export default apiRouter;