import { Module } from '@nestjs/common';
import { EntriesService } from './entries.service';
import { EntriesController } from './entries.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EntrySchema, Entry } from './schemas/entry.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'entries', schema: EntrySchema }])],
    controllers: [
      EntriesController
    ],
    providers: [
      EntriesService
    ]
  })
export class EntriesModule {}
