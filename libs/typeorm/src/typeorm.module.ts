import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: configService.get('type'),
        url: configService.get<string>('DATABASE_URL'),
        synchronize: configService.get<boolean>('synchronize'),
        autoLoadEntities: configService.get<boolean>('autoLoadEntities'),
      }),
    }),
  ],
  providers: [],
  exports: [TypeOrmModule],
})
export class TypeORMConnectionModule {}
