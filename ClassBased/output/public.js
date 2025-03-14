"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
const person1 = new Person("Alice");
console.log(person1.name);
person1.sayHello();
