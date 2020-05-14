import { Module } from '@nestjs/common';
import { EntriesHtmlController } from './entries.html.controller';
import { EntriesJsonController } from './entries.json.controller';
import { EntriesService } from './entries.service';

@Module({
    controllers: [
      EntriesHtmlController,
      EntriesJsonController
    ],
    providers: [
      EntriesService
    ]
  })
export class EntriesModule {}
