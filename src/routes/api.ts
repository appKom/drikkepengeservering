import { Router, json } from 'express';
const apiRouter = Router();

apiRouter.use(json());
// apiRouter.use(auth()); // Authenticate the server by sertificate and/or IP address

apiRouter.post('/user', (req, res) => {
  try {
    console.log(`POST: user/${req.body.userId}`);

    // Make user in db

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
    
    // Serialize and return user data

    res.sendStatus(200);

  } catch (error) {
    console.log(`ERROR: ${error.message}`);
    res.status(500)
    res.send('Something went wrong');
  }
});

apiRouter.put('/user/:userId', (req, res) => {
  try {
    
    // Delete user

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