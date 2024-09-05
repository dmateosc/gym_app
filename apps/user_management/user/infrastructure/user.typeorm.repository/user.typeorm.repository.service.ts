import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../rest/dto/create-user.dto';
import { UpdateUserDto } from '../rest/dto/update-user.dto';
import { UserRepository } from '../../domain/user.repository/user.repository';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserTypeormRepository implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOne({ where: { userId: id } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ userId: id }, updateUserDto);
  }

  remove(id: string) {
    return this.userRepository.delete({ userId: id });
  }
}
