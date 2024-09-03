import { CreateUserDto } from '../../infrastructure/rest/dto/create-user.dto';
import { UpdateUserDto } from '../../infrastructure/rest/dto/update-user.dto';

export interface UserRepository {
  create(createUserDto: CreateUserDto);

  findAll();

  findOne(id: string);

  update(id: string, updateUserDto: UpdateUserDto);

  remove(id: number);
}

export const UserRepository = Symbol('UserRepository');
