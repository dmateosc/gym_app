import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configUsersAPI = new DocumentBuilder()
    .setTitle('Gym Users API')
    .setDescription('API to manage the Users of the Gym')
    .setVersion('0.1')
    .build();

  const documentUsersAPI = SwaggerModule.createDocument(app, configUsersAPI);
  SwaggerModule.setup('gym-user-api', app, documentUsersAPI);
  await app.listen(3000);
}

bootstrap();
