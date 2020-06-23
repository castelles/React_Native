import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);
routes.put('/users', UserController.update);

// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Fulano',
//     email: 'fulano@itbam.org.br',
//     password_hash: '12345678',
//   });
//   res.json(user);
// });

export default routes;
