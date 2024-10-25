import { Module } from '@nestjs/common';
import { MessagingUserService } from './messaging_user.service';

@Module({
  controllers: [],
  providers: [MessagingUserService],
})
export class MessagingUserModule {}
