import { Module } from '@nestjs/common';
import { UserService } from './application/user.service';
import { UserController } from './infrastructure/rest/user.controller';
import { PrismaModule } from '@app/prisma';
import { UserRepository } from './domain/user.repository/user.repository';
import { TypeORMConnectionModule } from '@app/typeorm';
import { ConfigService } from '@nestjs/config';
import { UserPrismaRepository } from './infrastructure/user.prisma.repository/user.prisma.repository.service';
import { UserTypeormRepository } from './infrastructure/user.typeorm.repository/user.typeorm.repository.service';

@Module({
  imports: [PrismaModule, TypeORMConnectionModule],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: UserRepository,
      useFactory: (
        configService: ConfigService,
        userTypeormRepository: UserTypeormRepository,
        userPrismaRepository: UserPrismaRepository,
      ) => {
        const ormType = configService.get<string>('orm-type');
        return ormType === 'typeorm'
          ? userTypeormRepository
          : userPrismaRepository;
      },
      inject: [ConfigService, UserTypeormRepository, UserPrismaRepository],
    },
  ],
})
export class UserModule {}
