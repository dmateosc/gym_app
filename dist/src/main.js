"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configUsersAPI = new swagger_1.DocumentBuilder()
        .setTitle('Gym Users API')
        .setDescription('API to manage the Users of the Gym')
        .setVersion('0.1')
        .build();
    const documentUsersAPI = swagger_1.SwaggerModule.createDocument(app, configUsersAPI);
    swagger_1.SwaggerModule.setup('gym-user-api', app, documentUsersAPI);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map