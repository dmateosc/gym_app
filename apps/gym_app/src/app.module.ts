import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TrainingModule } from './training/training.module';
import { ExercisesModule } from './exercises/exercises.module';
import { MusclesModule } from './muscles/muscles.module';

@Module({
  imports: [TrainingModule, ExercisesModule, MusclesModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
