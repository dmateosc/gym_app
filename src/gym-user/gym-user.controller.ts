import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GymUserService } from './gym-user.service';
import { CreateGymUserDto } from './dto/create-gym-user.dto';
import { UpdateGymUserDto } from './dto/update-gym-user.dto';

@Controller('gym-user')
export class GymUserController {
  constructor(private readonly gymUserService: GymUserService) {}

  @Post()
  create(@Body() createGymUserDto: CreateGymUserDto) {
    return this.gymUserService.create(createGymUserDto);
  }

  @Get()
  findAll() {
    return this.gymUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gymUserService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGymUserDto: UpdateGymUserDto) {
    return this.gymUserService.update(+id, updateGymUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gymUserService.remove(+id);
  }
}
