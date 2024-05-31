export class Car {
    make: string;
    model: string;
    year: number;
    mileage: number;

    constructor(make: string, model: string, year: number, mileage: number = 0) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    drive(distance: number): void {
        this.mileage += distance;
    }

    getDescription(): string {
        return `${this.year} ${this.make} ${this.model} with ${this.mileage} miles`;
    }
}