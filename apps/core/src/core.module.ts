import { Global, Module } from '@nestjs/common';
import { UserModule } from '@user_management/src/user/user.module';
import { ErrorService } from './error/error.service';

@Global()
@Module({
  imports: [UserModule],
  controllers: [],
  providers: [ErrorService],
})
export class CoreModule {}
