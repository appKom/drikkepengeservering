import { Router, json } from 'express';
import { createUser, deleteUser, findUser, addTransaction, UserNotFoundError, BalanceNotSufficientError, UserExistsError } from '../service/User';
const apiRouter = Router();

apiRouter.use(json());
// apiRouter.use(auth()); // TODO: Authenticate the server by certificate and/or IP address


// User Creation
apiRouter.put('/user/:userId', async (req, res) => {
  try {
    console.log(`PUT: user/${req.params.userId}`);
    await createUser(parseInt(req.params.userId));
    return res.sendStatus(200);

  } catch (error) {
    console.log(`ERROR: ${error.message}`);
		switch(error.constructor) {
			case UserExistsError:
				return res
					.status(403)
					.json({"error": error.message});
			default:
				return res
					.status(500)
					.json({"error": error.message});
		}
  }
});

// Get user balance
apiRouter.get('/user/:userId', async (req, res) => {
  try {
    console.log(`GET: user/${req.params.userId}`);
		const user = await findUser(parseInt(req.params.userId));
    return res
      .status(200)
      .send(user);

  } catch (error) {
    console.log(`ERROR: ${error.message}`);
		switch(error.constructor) {
			case UserNotFoundError:
				return res
					.status(404)
					.json({"error": error.message});
			default:
				return res
					.status(500)
					.json({"error": error.message});
		}
  }
});

// Add transaction
apiRouter.post('/user/:userId', async (req, res) => {
  try {
    console.log(`POST: user/${req.params.userId} <- ${req.body.coins}kr`);
    await addTransaction(
			parseInt(req.params.userId),
			parseInt(req.body.coins)
		);
    return res.sendStatus(200);

  } catch (error) {
    console.log(`ERROR: ${error.message}`);

		switch(error.constructor) {
			case UserNotFoundError:
				return res
					.status(404)
					.json({"error": error.message});
			case BalanceNotSufficientError:
				return res
					.status(403)
					.json({"error": error.message});
			default:
				return res
					.status(500)
					.json({"error": error.message});
		}
  }	
});

// Delete user
apiRouter.delete('/user/:userId', async (req, res) => {
  try {
    console.log(`DEL: user/${req.params.userId}`);
    await deleteUser(parseInt(req.params.userId))
    return res.sendStatus(200);

  } catch (error) {
    console.log(`ERROR: ${error.message}`);

		switch(error.constructor) {
			case UserNotFoundError:
				return res
					.status(404)
					.json({"error": error.message});
			default:
				return res
					.status(500)
					.json({"error": error.message});
		}
  }	
});

export default apiRouter;
