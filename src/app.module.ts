import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { AuthModule } from './auth/auth.module';
import { VideosModule } from './videos/videos.module';
import { AwardsModule } from './awards/awards.module';

@Module({
  imports: [CourseModule, AuthModule, VideosModule, AwardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
