interface Shape {
    calculateArea(width: number, height: number): number;
    calculatePerimeter(width: number, height: number): number;
}
class Circle implements Shape {
    constructor(private radius: number) { }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Triangle implements Shape {
    constructor(private base: number, private height: number, private side1: number, private side2: number, private side3: number) { }
    calculateArea(): number {
        return 0.5 * this.base * this.height;
    }
    calculatePerimeter(): number {
        return this.side1 + this.side2 + this.side3;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) { }
    calculateArea(): number {
        return this.width * this.height;
    }
    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}


const myCircle = new Circle(5);
console.log("Cirkel - Oppervlakte:", myCircle.calculateArea());
console.log("Cirkel - Omtrek:", myCircle.calculatePerimeter());


const myTriangle = new Triangle(4, 5, 3, 4, 5);
console.log("Driehoek - Oppervlakte:", myTriangle.calculateArea());
console.log("Driehoek - Omtrek:", myTriangle.calculatePerimeter());


const myRectangle = new Rectangle(6, 8);
console.log("Rechthoek - Oppervlakte:", myRectangle.calculateArea());
console.log("Rechthoek - Omtrek:", myRectangle.calculatePerimeter());


