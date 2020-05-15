import { Module } from '@nestjs/common';
import { EntriesModule } from './entries/entries.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Joi = require('@hapi/joi');
import { MongooseModule } from '@nestjs/mongoose';


/**
 * Modules used in the app are declared here :
 *  * EntriesModule: used to handle public api for entries
 * 
 * Additionnaly, the ConfigModule is imported to set the environments
 * variables :
 *  * AUTHOR_NAME   : firt name and last name of the main contact author
 *  * AUTHOR_EMAIL  : email of the main contact author
 *  * PORT          : default port to listen
 * 
 * Additionnaly, the MongooseModule is imported to set the connexion with the
 * mongodb database
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
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('HOST'),
      }),
      inject: [ConfigService],
    }),
  ]
})
export class AppModule {}
