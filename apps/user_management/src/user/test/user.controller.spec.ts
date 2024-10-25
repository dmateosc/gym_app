import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../infrastructure/rest/user.controller';
import { UserService } from '../application/user.service';
import { PrismaModule } from '@app/prisma';
import { TypeORMConnectionModule } from '@app/typeorm';
import { UserRepository } from '../domain/user.repository/user.repository';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserPrismaRepository } from '../infrastructure/user.prisma.repository/user.prisma.repository.service';
import { UserTypeormRepository } from '../infrastructure/user.typeorm.repository/user.typeorm.repository.service';

describe('UserController', () => {
  let controller: UserController;
  const UserTypeormRepositoryMock = {
    create: jest.fn().mockReturnValue(Promise.resolve()),
    findAll: jest.fn().mockReturnValue(Promise.resolve()),
    findOne: jest.fn().mockReturnValue(Promise.resolve()),
    update: jest.fn().mockReturnValue(Promise.resolve()),
    remove: jest.fn().mockReturnValue(Promise.resolve()),
  };

  const UserPrismaRepositoryMock = {
    create: jest.fn().mockReturnValue(Promise.resolve()),
    findAll: jest.fn().mockReturnValue(Promise.resolve()),
    findOne: jest.fn().mockReturnValue(Promise.resolve()),
    update: jest.fn().mockReturnValue(Promise.resolve()),
    remove: jest.fn().mockReturnValue(Promise.resolve()),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: '.env.test', // Load test environment variables
          isGlobal: true,
        }),
        PrismaModule,
        TypeORMConnectionModule,
      ],
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
        {
          provide: UserTypeormRepository,
          useValue: UserTypeormRepositoryMock,
        },
        {
          provide: UserPrismaRepository,
          useValue: UserPrismaRepositoryMock,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
