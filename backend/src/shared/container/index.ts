import { container } from 'tsyringe';

import IUserRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository,
);
