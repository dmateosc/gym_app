import { Injectable } from '@nestjs/common';
import { CreateGymUserDto } from './dto/create-gym-user.dto';
import { UpdateGymUserDto } from './dto/update-gym-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GymUserService {
  constructor(private readonly prisma: PrismaService) {}
  create(createGymUserDto: CreateGymUserDto) {
    return createGymUserDto;
  }

  async findAll() {
    return await this.prisma.gymUser.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.gymUser.findUnique({
      where: { userId: id },
    });
  }

  update(id: number, updateGymUserDto: UpdateGymUserDto) {
    return `This action updates a #${id} gymUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} gymUser`;
  }
}
