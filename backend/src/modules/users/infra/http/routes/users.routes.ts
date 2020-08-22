import { Router } from 'express';

import UsersController from '../controllers/UsersControllers';

const usersController = new UsersController();

const routes = Router();

routes.post('/', usersController.create);

export default routes;
