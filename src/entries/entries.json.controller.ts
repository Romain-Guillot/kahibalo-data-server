import { Controller, Get, HttpException, HttpStatus, Render, Param } from "@nestjs/common";
import { EntryModel } from "./models/entry.model";
import { get } from "http";
import { EntriesController } from "./entries.controller";
import { EntriesService } from "./entries.service";

@Controller("json/entries")
export class EntriesJsonController implements EntriesController {

    constructor(private entriesService: EntriesService) {}

    @Get()
    listAll() : EntryModel[] {
        return this.entriesService.findAll();
    }

    @Get(':id')
    get(@Param('id') id: string) : EntryModel {
        return this.entriesService.findOne(id);
    }
}