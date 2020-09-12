import { Router } from 'express';
const mongoExpressRouter = Router();

mongoExpressRouter.get('', (req, res) => {
  res.redirect('http://localhost:8081');
});

export default mongoExpressRouter;