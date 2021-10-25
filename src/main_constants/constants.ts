import { DocumentBuilder, SwaggerDocumentOptions, SwaggerCustomOptions } from '@nestjs/swagger';

export const apiName = 'imdb_movies';

export const config = new DocumentBuilder()
  .setTitle('My movies collection')
  .setDescription("It keeps all the information about the user's movies.")
  .setVersion('1.0')
  .addTag('Movies')
  .build();

export const options: SwaggerDocumentOptions = 
{
    operationIdFactory: (
      controllerKey: string,
      methodKey: string
    ) => methodKey
};

export const customOptions: SwaggerCustomOptions = 
{
    swaggerOptions: {persistAuthorization: true,},
    customSiteTitle: 'My Movies Collection',
};