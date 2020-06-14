import { Entry } from "../schemas/entry.schema";

export class EntryListDto {
    lenght: number;
    entries: Entry[];
    tags: any[];
}