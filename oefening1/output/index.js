"use strict";
let leeftijdStudent = 24;
const achternaam = "Heeren";
let isStudent = true;
const dagenVanDeWeek = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'];
let persoonInfo = [24, "Heeren"];
var Windrichting;
(function (Windrichting) {
    Windrichting[Windrichting["Noord"] = 0] = "Noord";
    Windrichting[Windrichting["Oost"] = 1] = "Oost";
    Windrichting[Windrichting["Zuid"] = 2] = "Zuid";
    Windrichting[Windrichting["West"] = 3] = "West";
})(Windrichting || (Windrichting = {}));
var seizoenen;
(function (seizoenen) {
    seizoenen[seizoenen["Lente"] = 0] = "Lente";
    seizoenen[seizoenen["Zomer"] = 1] = "Zomer";
    seizoenen[seizoenen["Winter"] = 2] = "Winter";
    seizoenen[seizoenen["herfst"] = 3] = "herfst";
})(seizoenen || (seizoenen = {}));
let huidigSeizoen = seizoenen.herfst;
var planeten;
(function (planeten) {
    planeten["Mercury"] = "Small and close to the Sun";
    planeten["Venus"] = "Similar in size to Earth, but very hot";
    planeten["Earth"] = "Our home planet";
    planeten["Mars"] = "The red planet";
    planeten["Jupiter"] = "The largest planet";
    planeten["Saturn"] = "Known for its rings";
    planeten["Uranus"] = "An ice giant";
    planeten["Neptune"] = "A distant blue world";
})(planeten || (planeten = {}));
const favoritePlanet = planeten.Earth;
console.log(favoritePlanet);
let mijnData = "dit kan alles zijn";
mijnData = 100;
let externeInput;
console.log(`De leeftijd van ${achternaam} is ${leeftijdStudent}.`);
console.log(`Vandaag is het ${dagenVanDeWeek[0]}.`);
console.log(`Persoon Info: Naam is ${persoonInfo[1]} en de leeftijd is ${persoonInfo[0]}.`);
console.log(`Het huidig seizoen is ${huidigSeizoen}.`);
console.log(`Mijn data: ${mijnData}`);
//# sourceMappingURL=index.js.map