import { Router, json } from 'express';
import { User } from '../db/entity/User';
import { createUser, deleteUser, findUser } from '../service/User';
const apiRouter = Router();

apiRouter.use(json());
// apiRouter.use(auth()); // Authenticate the server by sertificate and/or IP address

apiRouter.post('/user', async (req, res) => {
  try {
    console.log(`POST: user/${req.body.userId}`);
    await createUser(req.body.userId);
    res.sendStatus(200);
  } catch (error) {
    console.log(`ERROR: ${error.message}`);
    res
      .status(500)
      .send('Something went wrong');
  }
});

apiRouter.get('/user/:userId', async (req, res) => {
  try {
    console.log(`GET: user/${req.params.userId}`);
    res
      .status(200)
      .send(await findUser(parseInt(req.params.userId)));
  } catch (error) {
    console.log(`ERROR: ${error.message}`);
    res
      .status(500)
      .send('Something went wrong');
  }
});

apiRouter.put('/user/:userId', (req, res) => {
  try {
    console.log(`DEL: user/${req.params.userId}`);
    deleteUser(parseInt(req.params.userId));
    res.sendStatus(200);
  } catch (error) {
    console.log(`ERROR: ${error.message}`);
    res
      .status(500)
      .send('Something went wrong');
  }
});


// POST - /auth - Get auth token

export default apiRouter;