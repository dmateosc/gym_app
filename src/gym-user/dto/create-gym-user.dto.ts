import { IsString, IsOptional } from 'class-validator';

export class CreateGymUserDto {
  @IsString
  dni: string;
  userName: string;
  userLastName: string;
  phone: string;
  email: string;
  lastDate: string;
  inscriptionDate: string;
  birthDate: string;
}
