export class Person {
    public name: string;
    public username: string;

    protected age: number = 27;

    private type: string = "maile";

    public constructor(name: string, username: string) {
        this.name = name;
        this.username = username;
    }

    public printAge() {
        console.log(this.age);

        this.setType("Old Guy");
    }

    private setType(type: string) {
        this.type = type;

        console.log(this.type);
    }
}

// const person = new Person("Max", "max");
// console.log(person.name, person.username, person);
