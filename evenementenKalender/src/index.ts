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

function addEvent(id: number, title: string, date: string, description: string, attendees: number): CalendarEventInterface {
    id = nextId++;
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