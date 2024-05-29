export class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce(): string {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}