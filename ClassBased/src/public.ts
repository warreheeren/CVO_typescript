class Person {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
const person1 = new Person("Alice");

console.log(person1.name);

person1.sayHello();
