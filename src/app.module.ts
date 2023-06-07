import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { AuthModule } from './auth/auth.module';
import { VideosModule } from './videos/videos.module';
import { AwardsModule } from './awards/awards.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal:true,
      }
    ),
    ServeStaticModule.forRoot({
      rootPath : join(__dirname, '..', 'public')
    }),
    CourseModule,
    AuthModule,
    VideosModule,
    AwardsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
