class Auto {
    merk: string;
    model: string;
    bouwjaar: number;

    constructor(merk: string, model: string, bouwjaar: number) {
        this.merk = merk;
        this.model = model;
        this.bouwjaar = bouwjaar;
    }
    toonDetails() {
        console.log(`Merk: ${this.merk}, Model: ${this.model}, Bouwjaar: ${this.bouwjaar}`);
    }
    get beschrijving(): string {
        return `${this.merk} ${this.model}`;
    }
    set jaar(value: number) {
        if (value > 2000) {
            this.bouwjaar = value;
        } else {
            console.log("Voer een geldig bouwjaar in.");
        }
    }
}

const mijnAuto = new Auto('Toyota', 'Corolla', 2020);
const jouwAuto = new Auto('Honda', 'Civic', 2019);

console.log(mijnAuto.merk);
mijnAuto.bouwjaar = 2021;
console.log(mijnAuto.bouwjaar);

mijnAuto.toonDetails();

console.log(mijnAuto.beschrijving);