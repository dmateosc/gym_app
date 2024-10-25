import { MessagingService } from '@app/messaging';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class MessagingUserService {
  constructor(
    @Inject(MessagingService)
    private readonly messagingService: MessagingService,
  ) {}
}
