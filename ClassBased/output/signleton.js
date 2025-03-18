"use strict";
class Singleton {
    //in eerste instantie zal deze undefined zijn
    // Maak de constructor private zodat er geen nieuwe instanties van buitenaf gemaakt kunnen worden
    constructor() { }
    // Methode om toegang te krijgen tot de singleton-instantie
    static getInstance() {
        if (!this.instance) {
            this.instance = new Singleton();
            // er wordt dus een nieuw object aangemaakt op basis van de Singleton class. Het nieuw aangemaakte object wordt opgeslagen in de instance-property van de Singleton-klasse. De methode getInstance() en de property instance zijn statisch en behoren tot de klasse zelf, niet tot de individuele instantie.
        }
        return this.instance;
    }
    someMethod() {
        console.log("Method in the Singleton class.");
    }
}
// Gebruik van de Singleton
const instance1 = Singleton.getInstance();
instance1.someMethod();
const instance2 = Singleton.getInstance();
//test constructor
//const instance3 = new Singleton();
//Deze regel zou een fout geven omdat de constructor private is, wat voorkomt dat er buiten de klasse een nieuwe instantie wordt gemaakt.
console.log(instance1 === instance2); // true
