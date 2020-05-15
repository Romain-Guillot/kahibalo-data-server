import { Controller, Get, HttpException, HttpStatus, Param, NotImplementedException, Post, Body } from "@nestjs/common";
import { EntryModel } from "./dto/entry.dto";
import { EntriesService } from "./entries.service";
import { Entry } from "./schemas/entry.schema";
import { EntryListDto } from "./dto/entry-list.dto";

@Controller("entries")
export class EntriesController {

    constructor(private entriesService: EntriesService) {}

    @Get()
    async listAll() : Promise<EntryListDto> {
        let res = new EntryListDto();
        res.content = await this.entriesService.findAll()
        res.lenght = res.content.length;
        return res;
    }

    @Get(':id')
    async get(@Param('id') id: string): Promise<Entry> {
        const entry = await this.entriesService.findOne(id);
        if (entry == null) {
            throw new HttpException("Not found", HttpStatus.NOT_FOUND);
        }
        return entry;
    }

    @Post()
    async create(@Body() entry: EntryModel) : Promise<void> {
        // this.entriesService.add(entry);
    }
}