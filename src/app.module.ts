import { Module } from '@nestjs/common';
import { EntriesModule } from './entries/entries.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './mongoose-config.service';
import { configuration } from './env-config';



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
    ConfigModule.forRoot(configuration),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService], // used in the MongooseConfigService 
      useClass: MongooseConfigService,
    },),
  ]
})
export class AppModule {}


