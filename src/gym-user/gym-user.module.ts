import { Module } from '@nestjs/common';
import { GymUserService } from './gym-user.service';
import { GymUserController } from './gym-user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GymUserController],
  providers: [GymUserService],
})
export class GymUserModule {}
