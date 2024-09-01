import { Test, TestingModule } from '@nestjs/testing';
import { GymUserController } from './gym-user.controller';
import { GymUserService } from './gym-user.service';

describe('GymUserController', () => {
  let controller: GymUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GymUserController],
      providers: [GymUserService],
    }).compile();

    controller = module.get<GymUserController>(GymUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
