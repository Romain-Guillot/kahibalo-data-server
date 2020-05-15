import { Injectable } from "@nestjs/common";
import { EntryModel } from "./dto/entry.dto";
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
        if (isValidObjectId(id)) {
            return await this.entryModel.findById(id).exec();
        }
        return null;
    }

    async add(entry: EntryModel) : Promise<void> {
        await this.entryModel.create(entry)
    }
}