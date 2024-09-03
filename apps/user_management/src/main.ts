import { NestFactory } from '@nestjs/core';
import { UserManagementModule } from './user_management.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(UserManagementModule);
  const configUsersAPI = new DocumentBuilder()
    .setTitle('Gym Users API')
    .setDescription('API to manage the Users of the Gym')
    .setVersion('0.1')
    .build();

  const documentUsersAPI = SwaggerModule.createDocument(app, configUsersAPI);
  SwaggerModule.setup('user-management-api', app, documentUsersAPI);
  await app.listen(3000);
}
bootstrap();
