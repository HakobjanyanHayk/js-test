import {Car} from "./Car";

class ElectricCar extends Car {
    batteryLevel: number;

    constructor(make: string, model: string, year: number, mileage: number = 0, batteryLevel: number = 100) {
        super(make, model, year, mileage);
        // Calling the constructor of the parent class

        this.batteryLevel = batteryLevel;
    }

    charge(amount: number): void {
        this.batteryLevel = Math.min(this.batteryLevel + amount, 100);
    }

    drive(distance: number): void {
        super.drive(distance);
        this.batteryLevel -= distance / 10;
        this.batteryLevel = Math.max(this.batteryLevel, 0);
    }

    getDescription(): string {
        return `${super.getDescription()} and ${this.batteryLevel}% battery remaining`;
    }
}