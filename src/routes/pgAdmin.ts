import { Router } from 'express';
import proxy from 'express-http-proxy';

const pgAdminRouter = Router();

pgAdminRouter.use(proxy('http://pgadmin:8081'));

export default pgAdminRouter;