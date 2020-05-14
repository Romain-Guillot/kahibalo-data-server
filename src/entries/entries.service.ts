import { Injectable } from "@nestjs/common";
import { EntryModel } from "./models/entry.model";

@Injectable()
export class EntriesService {

    private entries: Map<string, EntryModel> = new Map();

    constructor() {
        this.entries.set("wwii", new EntryModel("wii", "WWII"));
        this.entries.set("ott", new EntryModel("ott", "Empire ottoman"));
    }

    findAll() : EntryModel[] {
        return [... this.entries.values()];
    }

    findOne(id: string) : EntryModel {
        return this.entries.get(id);
    }

    add(entry: EntryModel) {
        this.entries.set(entry.id, entry);
    }
}