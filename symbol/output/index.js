"use strict";
const uniqueKey = Symbol('uniqueKey');
let obj1 = {
    [uniqueKey]: "Initial value associated with a unique key!",
    price: 42
};
obj1[uniqueKey] = "This value is associated with a unique key!";
console.log(obj1[uniqueKey]);
