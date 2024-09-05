import { Module } from '@nestjs/common';
import { TrainingModule } from './training/training.module';
import { ExercisesModule } from './exercises/exercises.module';
import { MusclesModule } from './muscles/muscles.module';

@Module({
  imports: [TrainingModule, ExercisesModule, MusclesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
