import { Controller, Get, HttpException, HttpStatus, Param, NotImplementedException, Post, Body, Put, Delete } from "@nestjs/common";
import { EntryCreateDto } from "./dto/entry-create.dto";
import { EntriesService, EntryNotFound } from "./entries.service";
import { Entry } from "./schemas/entry.schema";
import { EntryListDto } from "./dto/entry-list.dto";
import { EntryCreateResponse } from "./dto/entry-create-response.dto";

@Controller("entries")
export class EntriesController {
    constructor(private entriesService: EntriesService) {}

    @Get()
    async listAll() : Promise<EntryListDto> {
        let res = new EntryListDto();
        res.entries = await this.entriesService.findAll()
        res.lenght = res.entries.length;
        return res;
    }

    @Get(':id')
    async get(@Param('id') id: string): Promise<Entry> {
        try {
            return await this.entriesService.findOne(id);
        } catch (err) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
    }

    @Post()
    async create(@Body() entry: EntryCreateDto) : Promise<EntryCreateResponse> {
        try {
            return await this.entriesService.add(entry);
        } catch (err) {
            throw new HttpException('Cannot create', HttpStatus.CONFLICT);
        }
        
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() entry: EntryCreateDto) : Promise<void> {
        try {
            await this.entriesService.update(id, entry);
        } catch (err) {
            throw new HttpException("", HttpStatus.NOT_FOUND);
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: string) : Promise<void> {
        try {
            await this.entriesService.delete(id);
        } catch (err) {
            switch (err.constructor) {
                case EntryNotFound:
                    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
                default:
                    throw new HttpException('Cannot delete', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
}