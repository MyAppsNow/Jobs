import { getRepository, Repository } from 'typeorm';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findyById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const { name, email, password } = data;

    const createUser = await this.ormRepository.create({
      name,
      email,
      password,
    });

    await this.ormRepository.save(createUser);

    return createUser;
  }

  public async save(user: User): Promise<User> {
    const { name, email, password } = user;

    const userSave = await this.ormRepository.save({ name, email, password });

    return userSave;
  }
}

export default UsersRepository;
