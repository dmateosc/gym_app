import { Test, TestingModule } from '@nestjs/testing';
import { GymUserService } from './gym-user.service';

describe('GymUserService', () => {
  let service: GymUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GymUserService],
    }).compile();

    service = module.get<GymUserService>(GymUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
