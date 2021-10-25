import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { apiName, config, options, customOptions } from './main_constants/constants';

async function bootstrap() 
{
  const app = await NestFactory.create(AppModule);
  
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup(apiName, app, document, customOptions);

  await app.listen(3000);
}
bootstrap();
