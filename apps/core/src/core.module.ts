import { Global, Module } from '@nestjs/common';
import { UserModule } from 'apps/user_management/user/user.module';
import { ErrorService } from './error/error.service';

@Global()
@Module({
  imports: [UserModule],
  controllers: [],
  providers: [ErrorService],
})
export class CoreModule {}
