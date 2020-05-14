import { Controller, Get, HttpException, HttpStatus, Render, Param } from "@nestjs/common";
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
        return this.entriesService.findOne(id);
    }
}