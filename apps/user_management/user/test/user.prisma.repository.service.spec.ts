import { Test, TestingModule } from '@nestjs/testing';
import { UserPrismaRepository } from '../infrastructure/user.prisma.repository/user.prisma.repository.service';
import { PrismaModule } from '@app/prisma';

describe('UserPrismaRepositoryService', () => {
  let service: UserPrismaRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [UserPrismaRepository],
    }).compile();

    service = module.get<UserPrismaRepository>(UserPrismaRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
