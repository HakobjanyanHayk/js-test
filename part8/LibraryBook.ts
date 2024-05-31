export class LibraryBook {
    public title: string;
    public author: string;
    private readonly isbn: string;
    protected availableCopies: number;

    constructor(title: string, author: string, isbn: string, availableCopies: number = 1) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.availableCopies = availableCopies;
    }

    public checkOut(): boolean {
        if (this.availableCopies > 0) {
            this.availableCopies--;
            return true;
        }
        return false;
    }

    public returnBook(): void {
        this.availableCopies++;
    }

    public getISBN(): string {
        return this.isbn;
    }
}