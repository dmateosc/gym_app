import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GymUserModule } from './gym-user/gym-user.module';

@Module({
  imports: [PrismaModule, GymUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
