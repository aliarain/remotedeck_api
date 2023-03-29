import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder().setTitle('RemoteDeck').setDescription('RemoteDeck API').setVersion('0.2').addTag('remotedeck').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app ,document);
  const PORT = process.env.PORT || 5909
  await app.listen(PORT);
  console.log(`Api is Running on https://localhost${PORT}/api`);

}
bootstrap();
