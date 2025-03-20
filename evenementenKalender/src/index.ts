interface CalendarEventInterface {
    id: number;
    title: string;
    date: string;
    description: string;
    attendees: number;
}

type CalendarEventAlias = CalendarEventInterface[];
let nextId = 0;
let events: CalendarEventAlias = [];

function addEvent(title: string, date: string, description: string, attendees: number): CalendarEventInterface {
    const id = nextId++;
    const event = { id, title, date, description, attendees };
    events.push(event);
    return event;
}

function removeEvent(id: number): boolean {
    const index = events.findIndex(event => event.id === id);
    if (index === -1) return false;
    events.splice(index, 1);
    return true;
}

function findEventByTitle(title: string): CalendarEventInterface | undefined {
    return events.find(event => event.title.toLocaleLowerCase() === title.toLocaleLowerCase());
}

function searchEvents(woord: string): CalendarEventAlias {
    const woordZonderHoofdLetter = woord.toLowerCase();
    return events.filter(event => event.title.toLowerCase().includes(woordZonderHoofdLetter) || event.description.toLowerCase().includes(woordZonderHoofdLetter));
}

addEvent("TypeScript Workshop", "2034-03-15", "Een diepgaande workshop over TypeScript.", 100);
addEvent("JavaScript Conferentie", "2034-04-20", "Internationale conferentie over JavaScript.", 200);

const eventWorkshop = findEventByTitle("Workshop");
console.log(`Evenement met titel 'Workshop':`, eventWorkshop);

console.log("\nZoekresultaten voor 'workshop':");
const zoekWorkshop = searchEvents("workshop");
zoekWorkshop.forEach(event => console.log(event.title));

console.log("\nZoekresultaten voor 'TypeScript':");
const zoekTypeScript = searchEvents("TypeScript");
zoekTypeScript.forEach(event => console.log(event.title));

console.log("\nZoekresultaten voor 'over':");
const zoekOver = searchEvents("over");
zoekOver.forEach(event => console.log(event.title));

console.log("\nEvenement 1 verwijderd:", removeEvent(1));

console.log("\nHuidige Evenementen:", events);