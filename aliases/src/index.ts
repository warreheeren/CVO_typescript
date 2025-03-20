type Product = {
    naam: string,
    prijs: number
    beschrijving: string
}

const producten: Product[] = [{
    naam: "Laptop Lenovo",
    prijs: 1000,
    beschrijving: "Een laptop van het merk Lenovo"
}];

function toonProducten(producten: Product[]) {
    producten.forEach(p => {
        console.log(`Product: ${p.naam}, Prijs: ${p.prijs}, Beschrijving: ${p.beschrijving}`);
    });
}

toonProducten(producten);