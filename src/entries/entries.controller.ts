import { Controller, Get, HttpException, HttpStatus, Param, NotImplementedException, Post, Body } from "@nestjs/common";
import { EntryModel } from "./models/entry.model";
import { EntriesService } from "./entries.service";

@Controller("entries")
export class EntriesController {

    constructor(private entriesService: EntriesService) {}

    @Get()
    listAll() : any {
        return {
            entries: this.entriesService.findAll()
        };
    }

    @Get(':id')
    get(@Param('id') id: string): any {
        let entry = this.entriesService.findOne(id);
        if (entry == null)
            throw new HttpException("Not found", HttpStatus.NOT_FOUND);
        return entry;
    }

    @Post()
    create(@Body() entry: EntryModel) {
        this.entriesService.add(entry);
    }
}