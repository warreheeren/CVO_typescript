interface Elementen<T> {
    value: T;
    priority: 1 | 2 | 3;
}
class PriorityQueue<T> {
    elementen: Elementen<T>[] = [];
    enqueue(value: T, priority: 1 | 2 | 3): void {
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
    displayElements(): void {
        this.elementen.forEach(element => {
            console.log(`Value: ${element.value}, Priority: ${element.priority}`);
        });
    }
    dequeue(): T | undefined {
        return this.elementen.shift()?.value;

    }
    peek(): T | undefined {
        return this.elementen[0]?.value;
    }
    isEmpty(): boolean {
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


