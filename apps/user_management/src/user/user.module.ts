import { Module } from '@nestjs/common';
import { UserService } from './application/user.service';
import { UserController } from './infrastructure/rest/user.controller';
import { PrismaModule } from '@app/prisma';
import { UserPrismaRepository } from './infrastructure/user.prisma.repository/user.prisma.repository.service';
import { UserRepository } from './domain/user.repository/user.repository';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: UserRepository,
      useClass: UserPrismaRepository,
    },
  ],
})
export class UserModule {}
