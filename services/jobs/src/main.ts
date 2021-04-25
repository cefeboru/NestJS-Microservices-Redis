import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('tiny'));
  const config = new DocumentBuilder()
    .setTitle('Jobs API')
    .setDescription('List jobs and filter by location and/or description')
    .setVersion('1.0')
    .addTag('jobs')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();
