import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'express'; //importacion de express de json

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors:true
  });  //Express
  app.use(json({limit : '100mb'}))
  app.useGlobalPipes(new ValidationPipe());

  app.enableVersioning({
    defaultVersion:'1',
    type: VersioningType.URI
  })

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Documentation api nestjs curso')
    .setDescription('api de curso nestJS')
    .addTag('course')
    .addTag('videos')
    .addTag('awards')
    .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  console.log('________ ENV _____', process.env.PORT);
  
  SwaggerModule.setup('Documentation', app, document);
  /*const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  )*/
  await app.listen(3000);
}
bootstrap();
