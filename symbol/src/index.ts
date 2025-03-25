const uniqueKey = Symbol('uniqueKey');
interface CustomObject {
    [uniqueKey]: string;
    price: number;
}
let obj1: CustomObject = {
    [uniqueKey]: "Initial value associated with a unique key!",
    price: 42
};

obj1[uniqueKey] = "This value is associated with a unique key!";

console.log(obj1[uniqueKey]);