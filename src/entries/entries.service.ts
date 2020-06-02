import { Injectable } from "@nestjs/common";
import { EntryCreateDto } from "./dto/entry-create.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Entry } from "./schemas/entry.schema";
import { Model } from "mongoose";
import slug = require("slug");
import { EntryCreateResponse } from "./dto/entry-create-response.dto";

@Injectable()
export class EntriesService {
    constructor(@InjectModel('entries') private entryModel: Model<Entry>) {}

    async findAll() : Promise<Entry[]> {
        return await this.entryModel.find().exec();
    }

    async findOne(id: string) : Promise<Entry> {
        let entry = await this.entryModel.findById(id).exec();
        if (entry == null) {
            throw new EntryNotFound();
        }
        return entry;
    }

    async add(entry: EntryCreateDto) : Promise<EntryCreateResponse> {
        try {
            var entrySlug = slug(entry.title);
            await this.entryModel.create({_id: entrySlug,...entry});
            return new EntryCreateResponse(entrySlug);
        } catch (err) {
            console.log(err);
            throw new CannotCreateOrUpdateEntry();
        }
    }

    async update(id: string, entry: EntryCreateDto) : Promise<void> {
        const res = await this.entryModel.findOneAndUpdate({_id: id}, entry, {upsert: false});
        if (res == null) {
            throw new EntryNotFound();
        }
    }

    async delete(id: string) : Promise<void> {
        let a = await this.entryModel.deleteOne({_id: id});
        if (a.deletedCount != 1) {
            throw new EntryNotFound();
        }
    }
}


export class EntryNotFound extends Error { }
export class CannotCreateOrUpdateEntry extends Error { }