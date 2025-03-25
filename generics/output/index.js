"use strict";
class PriorityQueue {
    constructor() {
        this.elementen = [];
    }
    enqueue(value, priority) {
        let added = false;
        for (let i = 0; i < this.elementen.length; i++) {
            if (this.elementen[i].priority > priority) {
                this.elementen.splice(i, 0, { value, priority });
                added = true;
                break;
            }
        }
        if (!added) {
            this.elementen.push({ value, priority });
        }
    }
    displayElements() {
        this.elementen.forEach(element => {
            console.log(`Value: ${element.value}, Priority: ${element.priority}`);
        });
    }
    dequeue() {
        var _a;
        return (_a = this.elementen.shift()) === null || _a === void 0 ? void 0 : _a.value;
    }
    peek() {
        var _a;
        return (_a = this.elementen[0]) === null || _a === void 0 ? void 0 : _a.value;
    }
    isEmpty() {
        return this.elementen.length === 0;
    }
}
const priorityQueue = new PriorityQueue;
priorityQueue.enqueue("Gamen", 3);
priorityQueue.enqueue("TypeScript herhalen", 1);
priorityQueue.enqueue("JavaScript herhalen", 2);
priorityQueue.enqueue("TypeScript oefenen", 1);
console.log("\nHuidige staat van de prioriteitswachtrij:");
priorityQueue.displayElements();
console.log("\ndequeue");
console.log(priorityQueue.dequeue());
console.log("\npeek");
console.log(priorityQueue.peek());
console.log("\nisEmpty");
console.log(priorityQueue.isEmpty());
