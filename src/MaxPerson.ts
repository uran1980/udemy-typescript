import {Person} from "./Person";

// Inheritance
class Max extends Person {
    // public name = "Max";
    // public username = "max";

    constructor(username: string) {
        super(name, username);
    }
}

const max = new Max("max");

console.log(max);
