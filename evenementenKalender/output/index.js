"use strict";
<<<<<<< HEAD
let nextId = 0;
let events = [];
function addEvent(title, date, description, attendees) {
    const id = nextId++;
    const event = { id, title, date, description, attendees };
    events.push(event);
    return event;
}
function removeEvent(id) {
    const index = events.findIndex(event => event.id === id);
    if (index === -1)
        return false;
    events.splice(index, 1);
    return true;
}
function findEventByTitle(title) {
    return events.find(event => event.title.toLocaleLowerCase() === title.toLocaleLowerCase());
}
function searchEvents(woord) {
    const woordZonderHoofdLetter = woord.toLowerCase();
    return events.filter(event => event.title.toLowerCase().includes(woordZonderHoofdLetter) || event.description.toLowerCase().includes(woordZonderHoofdLetter));
}
addEvent("TypeScript Workshop", "2034-03-15", "Een diepgaande workshop over TypeScript.", 100);
addEvent("JavaScript Conferentie", "2034-04-20", "Internationale conferentie over JavaScript.", 200);
const eventWorkshop = findEventByTitle("Workshop");
console.log(`Evenement met titel 'Workshop':`, eventWorkshop);
console.log("\nZoekresultaten voor 'workshop':");
const searchResultsWorkshop = searchEvents("workshop");
searchResultsWorkshop.forEach(event => console.log(event.title));
console.log("\nZoekresultaten voor 'TypeScript':");
const searchResultsTypeScript = searchEvents("TypeScript");
searchResultsTypeScript.forEach(event => console.log(event.title));
console.log("\nZoekresultaten voor 'over':");
const searchResultsOver = searchEvents("over");
searchResultsOver.forEach(event => console.log(event.title));
console.log("\nEvenement 1 verwijderd:", removeEvent(1));
console.log("\nHuidige Evenementen:", events);
=======
>>>>>>> e76638a3001b716bed74b304279de1c9bdf5531e
