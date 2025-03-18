"use strict";
class Logger {
    constructor() { }
    ;
    static getInstance() {
        if (!Logger._instance) {
            Logger._instance = new Logger();
        }
        return Logger._instance;
    }
    logging(bericht) {
        console.log(`[${new Date().toISOString()}] ${bericht}`);
    }
}
// Definieer een Users klasse.
class Users {
    constructor(naam) {
        this.logger = Logger.getInstance();
        this.naam = naam;
        this.logger.logging(`Een nieuwe gebruiker met de naam ${this.naam} is aangemaakt.`);
    }
    setName(naam) {
        const oudeNaam = this.naam;
        this.naam = naam;
        this.logger.logging(`De gebruikersnaam is veranderd van ${oudeNaam} naar ${this.naam}.`);
    }
}
const users1 = new Users("John Doe");
users1.setName("Jane Doe");
