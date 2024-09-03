import { PrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../rest/dto/create-user.dto';
import { UpdateUserDto } from '../rest/dto/update-user.dto';
import { UserRepository } from '../../domain/user.repository/user.repository';

@Injectable()
export class UserPrismaRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return await this.prisma.gymUser.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prisma.gymUser.findMany();
  }

  findOne(id: string) {
    return this.prisma.gymUser.findUnique({ where: { userId: id } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.gymUser.update({
      where: { userId: id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
