import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        ({
          type: configService.get('type') as any,
          url: configService.get('DATABASE_URL', 'sqlite::memory:'),
          database: configService.get('database'),
          synchronize: Boolean(configService.get('synchronize')),
          autoLoadEntities: Boolean(configService.get('autoLoadEntities')),
        }) as TypeOrmModuleOptions,
    }),
  ],
  providers: [],
  exports: [TypeOrmModule],
})
export class TypeORMConnectionModule {}
