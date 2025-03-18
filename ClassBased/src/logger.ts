class Logger {
    private static _instance: Logger;
    private constructor() { };
    public static getInstance(): Logger {
        if (!Logger._instance) {
            Logger._instance = new Logger();
        }
        return Logger._instance;
    }
    public logging(bericht: string) {
        console.log(`[${new Date().toISOString()}] ${bericht}`);
    }
}

class Users {
    private naam: string;
    private logger: Logger = Logger.getInstance();

    constructor(naam: string) {
        this.naam = naam;
        this.logger.logging(`Een nieuwe gebruiker met de naam ${this.naam} is aangemaakt.`);
    }

    public setName(naam: string) {
        const oudeNaam = this.naam;
        this.naam = naam;
        this.logger.logging(`De gebruikersnaam is veranderd van ${oudeNaam} naar ${this.naam}.`);
    }
}
const users1 = new Users("John Doe");
users1.setName("Jane Doe"); 