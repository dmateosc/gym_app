import { IsString, IsEmail, IsDateString, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  dni: string;

  @IsString()
  name: string;

  @IsString()
  lastName: string;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @IsDateString()
  @IsOptional()
  lastDate: string;

  @IsOptional()
  @IsDateString()
  inscriptionDate: string;

  @IsDateString()
  birthDate: string;
}
