import { Test, TestingModule } from '@nestjs/testing';
import { UserTypeormRepository } from '../infrastructure/user.typeorm.repository/user.typeorm.repository.service';
import { Repository } from 'typeorm';
import { User } from '../domain/entities/user.entity';
import { TypeORMConnectionModule } from '@app/typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

describe('UserTypeormRepositoryService', () => {
  let service: UserTypeormRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: '.env.test', // Load test environment variables
          isGlobal: true,
        }),
        TypeORMConnectionModule, // Ensure this is imported after ConfigModule
      ],
      providers: [
        UserTypeormRepository,
        {
          provide: getRepositoryToken(User),
          useClass: Repository, // Use actual repository class or a mock as needed
        },
      ],
    }).compile();

    service = module.get<UserTypeormRepository>(UserTypeormRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
