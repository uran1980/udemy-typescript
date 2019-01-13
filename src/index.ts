enum Color {
    Gray = "gray",
    Green = "green",
    Blue = "blue",
}

let myColor: Color = Color.Blue;

console.log(myColor);

interface Complex {data: number[]; output: (all: boolean) => number[]; }

let complexObj: Complex = {
    data: [1, 2, 3],

    output(all: boolean): number[] {
        return this.data;
    },
};

// complexObj = {};

// console.log(complexObj);

let canBeNull: number|null = 12;
canBeNull = null;

// console.log(canBeNull);

// -----------------------------------------------------------------------------
//  EXESICE
// -----------------------------------------------------------------------------
interface BankAccount {money: number; deposit: (value: number) => void; }
interface Profile {name: string; bankAccount: BankAccount; hobbies: string[]; }

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    },
};

let myself: Profile = {
    name: "Max",
    bankAccount,
    hobbies: ["Sport", "Cooking"],
};

myself.bankAccount.deposit(3000);

console.log(myself);

let someUnusedVar;
