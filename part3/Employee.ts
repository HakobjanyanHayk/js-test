import {Person} from "./Person";

class Employee extends Person {
    jobTitle: string;

    constructor(name: string, age: number, jobTitle: string) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    introduce(): string {
        return `Hi, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.jobTitle}.`;
    }
}