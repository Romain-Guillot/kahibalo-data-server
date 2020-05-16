export class EntryCreateDto {
    title: string;
    content: string;
    
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }
}