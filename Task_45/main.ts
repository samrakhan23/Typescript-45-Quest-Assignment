// Cars:

function cars(Manufacturer: string, Model: string, ...otherOpt:any[]){
    const myCar = {Manufacturer, Model, ...Object.fromEntries(otherOpt)}
    return myCar
}

let carDetails = cars("Toyota", "Corolla", ["Color", "Black"], ["Year", "2023"]);
console.log(carDetails);




