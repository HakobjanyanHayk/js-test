import {LibraryBook} from "./LibraryBook";

class DigitalBook extends LibraryBook {
    public fileSize: number;

    constructor(title: string, author: string, isbn: string, fileSize: number, availableCopies: number = 1) {
        super(title, author, isbn, availableCopies);
        this.fileSize = fileSize;
    }

    public checkOut(): boolean {
        if (this.availableCopies > 0) {
            this.availableCopies--;
            return true;
        }
        return false;
    }
}