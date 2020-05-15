import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './http-exception.filter';
import { ConfigService } from '@nestjs/config';


function initFilters(app: NestExpressApplication) {
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionFilter(httpAdapter));
}

function initSwagger(app: NestExpressApplication) {
  const config = app.get(ConfigService);
  const options = new DocumentBuilder()
    .setTitle('Kahibalo API documention')
    .setVersion('2.0')
    .setContact(config.get('AUTHOR_NAME'), undefined, config.get('AUTHOR_EMAIL'))
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);
}

async function listen(app: NestExpressApplication) {
  const port = app.get(ConfigService).get('PORT');
  await app.listen(port);
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['error', 'warn']
  });

  initFilters(app);
  initSwagger(app);
  await listen(app);
}

bootstrap();
