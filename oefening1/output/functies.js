"use strict";
const calculate = (a, b, operator) => {
    if (operator === 'substract') {
        return a - b;
    }
    return a + b;
};
const introductie = (naam, leeftijd = 30) => {
    return `Hallo, mijn naam is ${naam} en ik ben ${leeftijd} jaar oud.`;
};
const user = {
    naam: 'Warre',
    leeftijd: 24,
    describe() {
        return `Hallo ik ben ${this.naam} en ik ben ${this.leeftijd} jaar oud.`;
    }
};
//# sourceMappingURL=functies.js.map