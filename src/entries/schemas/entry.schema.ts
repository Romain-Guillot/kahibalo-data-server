import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Entry extends Document {
    @Prop()
    title: string;
}

export const EntrySchema = SchemaFactory.createForClass(Entry);