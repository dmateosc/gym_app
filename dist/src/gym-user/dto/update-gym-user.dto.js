"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateuserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_gym_user_dto_1 = require("./create-gym-user.dto");
class UpdateuserDto extends (0, swagger_1.PartialType)(create_gym_user_dto_1.CreateuserDto) {
}
exports.UpdateuserDto = UpdateuserDto;
//# sourceMappingURL=update-gym-user.dto.js.map