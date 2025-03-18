interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    discountPercentage?: number;
}
class Electronics implements Product {
    constructor(
        public id: number, public name: string, public price: number,
        public description: string, public discountPercentage?: number
    ) { }
}

class Clothing implements Product {
    constructor(
        public id: number, public name: string, public price: number,
        public description: string, public discountPercentage?: number
    ) { }
}


class Books implements Product {
    constructor(
        public id: number, public name: string, public price: number,
        public description: string, public discountPercentage?: number
    ) { }
}

const electronics1 = new Electronics(1, "Smartphone", 699.99, "Latest smartphone with high-resolution camera", 10); // 10% korting
const electronics2 = new Electronics(2, "Laptop", 1099.99, "Powerful laptop for work and gaming");


const clothing1 = new Clothing(3, "T-shirt", 19.99, "Comfortable cotton T-shirt");
const clothing2 = new Clothing(4, "Jeans", 49.99, "Classic denim jeans", 20); // 20% korting


const book1 = new Books(5, "JavaScript Basics", 29.99, "Introduction to JavaScript programming", 15); // 15% korting
const book2 = new Books(6, "The Great Gatsby", 9.99, "Classic novel by F. Scott Fitzgerald");
