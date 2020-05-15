import { Injectable } from "@nestjs/common";
import { EntryCreateDto } from "./dto/entry-create.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Entry } from "./schemas/entry.schema";
import { Model, isValidObjectId } from "mongoose";

@Injectable()
export class EntriesService {
    constructor(@InjectModel('entries') private entryModel: Model<Entry>) {}

    async findAll() : Promise<Entry[]> {
        return await this.entryModel.find().exec();
    }

    async findOne(id: string) : Promise<Entry> {
        let entry = undefined;
        if (isValidObjectId(id)) {
            entry = await this.entryModel.findById(id).exec();
        }
        if (entry == null) {
            throw new EntryNotFound();
        }
        return entry;
    }

    async add(entry: EntryCreateDto) : Promise<void> {
        await this.entryModel.create(entry)
    }

    async delete(id: string) : Promise<void> {
        let deleted = false;
        if (isValidObjectId(id)) {
            let a = await this.entryModel.deleteOne({_id: id});
            if (a.deletedCount == 1) {
                deleted = true
            }
        }
        if (!deleted) {
            throw new EntryNotFound();
        }
    }
}

export class EntryNotFound extends Error { }