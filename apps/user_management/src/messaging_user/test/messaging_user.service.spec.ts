import { Test, TestingModule } from '@nestjs/testing';
import { MessagingUserService } from '../messaging_user.service';
import { MessagingModule } from '@app/messaging';

describe('MessagingUserService', () => {
  let service: MessagingUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MessagingModule],
      providers: [MessagingUserService],
    }).compile();

    service = module.get<MessagingUserService>(MessagingUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
