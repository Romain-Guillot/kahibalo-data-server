import { Controller, Get, HttpException, HttpStatus, Render, Param, NotImplementedException } from "@nestjs/common";
import { EntryModel } from "./models/entry.model";
import { get } from "http";
import { EntriesController } from "./entries.controller";
import { EntriesService } from "./entries.service";

@Controller("entries")
export class EntriesHtmlController implements EntriesController {

    constructor(private entriesService: EntriesService) {}

    @Get()
    @Render('entries')
    listAll() : any {
        return {
            entries: this.entriesService.findAll()
        };
    }

    @Get(':id')
    @Render('entry')
    get(@Param('id') id: string): any {
        throw new NotImplementedException();
        return this.entriesService.findOne(id);
    }
}