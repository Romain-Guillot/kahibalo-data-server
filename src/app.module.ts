import { Module } from '@nestjs/common';
import { EntriesModule } from './entries/entries.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './mongoose.config';
import { configuration } from './env.config';
import { UsersModule } from './users/users.module';



/**
 * Modules used in the app are declared here :
 *  * EntriesModule: used to handle public api for entries
 * 
 * Additionnaly, the ConfigModule is imported to set the environments
 * variables, see the [configuration] object to see all available env variables.
 * 
 * Additionnaly, the MongooseModule is imported to set the connexion with the
 * mongodb database
 */
@Module({
  imports: [
    EntriesModule,
    UsersModule,
    ConfigModule.forRoot(configuration),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService], // used in the MongooseConfigService 
      useClass: MongooseConfigService,
    },),
  ]
})
export class AppModule {}


