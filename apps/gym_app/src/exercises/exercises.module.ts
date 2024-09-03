import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ApplicationService } from './application/application.service';

@Module({
  providers: [ExercisesService, ApplicationService]
})
export class ExercisesModule {}
