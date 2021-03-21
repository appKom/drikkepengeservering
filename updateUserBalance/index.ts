import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import Users from '../service/db';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

  let response;

  try {

    const id = req.params.id;
    const coins = parseInt(req.body.coins);
    const user = await Users.get(id);

    if (user.balance + coins < 0)
      throw { code: 403 };
    
    user.transactions.push({
      coins: coins,
      date: Date.now()
    });
    user.balance += coins;

    const result = await Users.update(user);
    response = { body: result, status: 200 };

  } catch (err) {

    switch (err.code) {
      case 404:
        response = { body: "User not found", status: 404 };
        break;

      case 403:
        response = { body: "User balance not sufficient", status: 403 };
        break;

      default:
        response = { body: err.message, status: 500 };
        break;
    }
  }

  context.res = response;
};

export default httpTrigger;