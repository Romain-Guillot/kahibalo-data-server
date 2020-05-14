import { Injectable } from "@nestjs/common";
import { EntryModel } from "./models/entry.model";

@Injectable()
export class EntriesService {
    findAll() : EntryModel[] {
        return [new EntryModel("WWII.."), new EntryModel("Empire ottoman")]
    }

    findOne(id: string) : EntryModel {
        return new EntryModel("WWII")
    }
}