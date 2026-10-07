let shoppingList = ["milk", "bread", "eggs", "cheese", "butter"];

shoppingList.push("yogurt");
console.log("The shopping list now contains: " + shoppingList.join(", "));

let employees = ["John", "Jane", "Jim", "Jill", "Jack"];
employees.shift();
console.log("The employees list now contains: " + employees)

let priceList = [2.99, 1.99, 3.49, 4.99, 5.49];
priceList.unshift(0.99);
console.log("The price list now contains: " + priceList)

let cities = ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth"];



if(cities.includes("Cape Town")) {
    console.log("Cape Town is in the list of cities.");
}
console.log("The shopping list contains " + shoppingList.length + " items.");