import { Test, TestingModule } from '@nestjs/testing';
import { UserTypeormRepositoryService } from '../infrastructure/user.typeorm.repository/user.typeorm.repository.service';

describe('UserTypeormRepositoryService', () => {
  let service: UserTypeormRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTypeormRepositoryService],
    }).compile();

    service = module.get<UserTypeormRepositoryService>(
      UserTypeormRepositoryService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
