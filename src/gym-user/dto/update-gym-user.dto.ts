import { PartialType } from '@nestjs/swagger';
import { CreateGymUserDto } from './create-gym-user.dto';

export class UpdateGymUserDto extends PartialType(CreateGymUserDto) {}
