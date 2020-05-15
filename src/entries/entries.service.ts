import { Injectable } from "@nestjs/common";
import { EntryCreateDto } from "./dto/entry-create.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Entry } from "./schemas/entry.schema";
import { Model, isValidObjectId } from "mongoose";
import slug = require("slug");

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

    async add(entry: EntryCreateDto) : Promise<void> {
        try {
            await this.entryModel.create({_id: slug(entry.title),...entry})
        } catch (err) {
            throw new CannotCreateOrUpdateEntry();
        }
        
    }

    async update(id: string, entry: EntryCreateDto) : Promise<void> {
        try {
            const res = await this.entryModel.findOneAndUpdate({_id: id}, entry, {upsert: false});
            if (res == null) throw Error();
        } catch (err) {
            throw new CannotCreateOrUpdateEntry();
        }
    }

    async delete(id: string) : Promise<void> {
        let deleted = false;
        try {
            let a = await this.entryModel.deleteOne({_id: id});
            if (a.deletedCount >= 1) {
                deleted = true;
            }
        } catch (err) {
            throw new Error();
        }
        if (!deleted)
            throw new EntryNotFound();
    }
}

export class EntryNotFound extends Error { }
export class CannotCreateOrUpdateEntry extends Error { }