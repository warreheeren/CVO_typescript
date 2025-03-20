interface Dish {
    name: string;
    price: number;
    quantityOrdered: number;
    discountPercentage?: number;
    quantityForDiscount?: number;
}

class MainCourse implements Dish {
    constructor(public name: string, public price: number, public quantityOrdered: number, public discountPercentage?: number, public quantityForDiscount?: number) { }
}

class Dessert implements Dish {
    constructor(public name: string, public price: number, public quantityOrdered: number, public discountPercentage?: number, public quantityForDiscount?: number) { }

}
function calculateTotalPrice(dishes: Dish[]): number {
    let totaal = 0;

    for (let d of dishes) {
        console.log(`${d.name} - €${d.price.toFixed(2)}`);
        let prijsZonderKorting = d.price * d.quantityOrdered;

        if (d.quantityForDiscount !== undefined &&
            d.discountPercentage !== undefined &&
            d.quantityOrdered >= d.quantityForDiscount) {

            const kortingBedrag = prijsZonderKorting * (d.discountPercentage / 100);
            prijsZonderKorting -= kortingBedrag;

            console.log(`Korting toegepast: ${d.discountPercentage}% op ${d.name}`);
        }

        console.log(`${d.price} * ${d.quantityOrdered} ordered = ${prijsZonderKorting.toFixed(2)}`);
        console.log('--------');

        totaal += prijsZonderKorting;
    }

    return totaal;
}

const gerechten: Dish[] = [
    new MainCourse("Chicken Wings", 8.95, 3, 20, 2),
    new MainCourse("Steak", 18.95, 1),
    new Dessert("Chocolate Cake", 6.99, 4, 15, 3),
    new Dessert("Ice Cream", 4.99, 2)
];

console.log(calculateTotalPrice(gerechten));
