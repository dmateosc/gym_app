import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../infrastructure/rest/dto/create-user.dto';
import { UpdateUserDto } from '../infrastructure/rest/dto/update-user.dto';
import { UserRepository } from '../domain/user.repository/user.repository';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}
  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.create(createUserDto);
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findOne(id: string) {
    return await this.userRepository.findOne(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
