//Code Question 1
/*
const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // 'Double Cheese Burger'
console.log(secondBurger.name); // 'Double Cheese Burger'
*/
//Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// Solo un oggetto è stato creato.


//Code Question 2

const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // "Salad"
console.log(secondBurger.ingredients[0]); // "Salad"

//Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?