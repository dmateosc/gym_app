import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '@user_management/src/user/user.module';
import { MessagingUserModule } from './messaging_user/messaging_user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    MessagingUserModule,
  ],
})
export class UserManagementModule {}
