"use strict";
const producten = [{
        naam: "Laptop Lenovo",
        prijs: 1000,
        beschrijving: "Een laptop van het merk Lenovo"
    }];
function toonProducten(producten) {
    producten.forEach(p => {
        console.log(`Product: ${p.naam}, Prijs: ${p.prijs}, Beschrijving: ${p.beschrijving}`);
    });
}
toonProducten(producten);
