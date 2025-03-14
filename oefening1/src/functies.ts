// const calculate = (a: number, b: number, operator?: string): number => {
//     if (operator === 'substract') {
//         return a - b;
//     }
//     return a + b;
// };

// const introductie = (naam: string, leeftijd: number = 30): string => {
//     return `Hallo, mijn naam is ${naam} en ik ben ${leeftijd} jaar oud.`;
// };


// const user: { naam: string, leeftijd: number, describe(): string } = {
//     naam: 'Warre',
//     leeftijd: 24,
//     describe() {
//         return `Hallo ik ben ${this.naam} en ik ben ${this.leeftijd} jaar oud.`;
//     }
// };

class Vehicle {
    protected brand: string;
    constructor(brand: string) {
        this.brand = brand;
    }
    protected startEngine() {
        console.log(`${this.brand} engine started.`);
    }
}
class Car extends Vehicle {
    private model: string;
    constructor(brand: string, model: string) {
        super(brand);
        this.model = model;
    }
    public drive() {
        this.startEngine();
        console.log(`Driving the ${this.brand} ${this.model}.`);
    }
}
const myCar = new Car("Toyota", "Camry");
myCar.drive();
