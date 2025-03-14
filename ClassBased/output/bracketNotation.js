"use strict";
class Student {
    constructor(naam, studentNummer) {
        this._cijfers = [];
        this._naam = naam;
        this._studentNummer = studentNummer;
    }
    get getNaam() {
        return this._naam;
    }
    get getGemiddelde() {
        if (this._cijfers.length === 0) {
            return 0;
        }
        const totaal = this._cijfers.reduce((acc, cijfer) => acc + cijfer, 0);
        return Number((totaal / this._cijfers.length).toFixed(2));
    }
    set setNaam(value) {
        if (value.trim() !== '') {
            this._naam = value;
        }
        else {
            console.log("Naam mag niet leeg zijn.");
        }
    }
    voegCijferToe(cijfer) {
        this._cijfers.push(cijfer);
    }
}
const student1 = new Student("Warre", 6);
student1.voegCijferToe(9);
console.log(`${student1.getNaam} heeft een gemiddelde van ${student1.getGemiddelde}.`);
student1.setNaam = "Jos";
console.log(`De nieuwe naam van student1 is: ${student1.getNaam}`);
