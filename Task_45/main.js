"use strict";
// Cars:
Object.defineProperty(exports, "__esModule", { value: true });
function cars(Manufacturer, Model, ...otherOpt) {
    const myCar = { Manufacturer, Model, ...Object.fromEntries(otherOpt) };
    return myCar;
}
let carDetails = cars("Toyota", "Corolla", ["Color", "Black"], ["Year", "2023"]);
console.log(carDetails);
