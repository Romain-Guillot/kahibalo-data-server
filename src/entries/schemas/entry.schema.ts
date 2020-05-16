import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({versionKey: false})
export class Entry extends Document {
    @Prop()
    _id: string;

    @Prop()
    title: string;

    @Prop()
    content: string;
}

export const EntrySchema = SchemaFactory.createForClass(Entry,);