let leeftijdStudent: number = 24;
const achternaam: string = "Heeren";
let isStudent: boolean = true;
const dagenVanDeWeek: string[] = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'];
let persoonInfo: [number, string] = [24, "Heeren"];
enum Windrichting {
    Noord,
    Oost,
    Zuid,
    West
}
enum seizoenen {
    Lente,
    Zomer,
    Winter,
    herfst
}
let huidigSeizoen: seizoenen = seizoenen.herfst;
enum planeten {
    Mercury = "Small and close to the Sun",
    Venus = "Similar in size to Earth, but very hot",
    Earth = "Our home planet",
    Mars = "The red planet",
    Jupiter = "The largest planet",
    Saturn = "Known for its rings",
    Uranus = "An ice giant",
    Neptune = "A distant blue world"
}

const favoritePlanet: planeten = planeten.Earth;
console.log(favoritePlanet);

let mijnData: any = "dit kan alles zijn";
mijnData = 100;
let externeInput: unknown;

console.log(`De leeftijd van ${achternaam} is ${leeftijdStudent}.`);
console.log(`Vandaag is het ${dagenVanDeWeek[0]}.`);
console.log(`Persoon Info: Naam is ${persoonInfo[1]} en de leeftijd is ${persoonInfo[0]}.`);
console.log(`Het huidig seizoen is ${huidigSeizoen}.`);
console.log(`Mijn data: ${mijnData}`);
