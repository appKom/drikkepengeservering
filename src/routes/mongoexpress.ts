import { Router } from 'express';
import proxy from 'express-http-proxy';

const mongoExpressRouter = Router();

mongoExpressRouter.use(proxy('http://localhost:8081'));

export default mongoExpressRouter;