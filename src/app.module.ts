import { Module } from '@nestjs/common';
import { EntriesModule } from './entries/entries.module';
import { ConfigModule } from '@nestjs/config';
import Joi = require('@hapi/joi');


/**
 * Modules used in the app are declared here :
 *  * EntriesModule: used to handle public api for entries
 * 
 * Additionnaly, the ConfigModule is imported to set the environments
 * variables :
 *  * AUTHOR_NAME   : firt name and last name of the main contact author
 *  * AUTHOR_EMAIL  : email of the main contact author
 *  * PORT          : default port to listen
 */
@Module({
  imports: [
    EntriesModule,
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        AUTHOR_NAME: Joi.string().required(),
        AUTHOR_EMAIL: Joi.string().required()
      }),
      validationOptions: {
        abortEarly: true,
      },
    })
  ]
})
export class AppModule {}
