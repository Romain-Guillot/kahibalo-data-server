import { Controller, Get, HttpException, HttpStatus, Render } from "@nestjs/common";
import { EntryModel } from "./models/entry.model";
import { get } from "http";


export interface EntriesController {
    listAll() : any;
    get(id: string) : any;
}





