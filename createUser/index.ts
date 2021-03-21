import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import Users from '../service/db';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  let response;

  try {

    const id = req.params.id;
    const result = await Users.create(id);
    response = { body: result, status: 200 };

  } catch (err) {

    switch (err.code) {
      case 409:
        response = { body: "User already exists", status: 403 };
        break;

      default:
        response = { body: err.message, status: 500 };
        break;
    }
  }

  context.res = response;
};

export default httpTrigger;