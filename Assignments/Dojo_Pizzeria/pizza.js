// Basic Pizza making function
function pizzaOven(crust, sauce, cheeses, toppings) {
  let pizza = {};
  pizza.crust = crust;
  pizza.sauce = sauce;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;
  return pizza;
}

// Random Pizza Making Function
function pizzaOvenRandom(crust, sauce, cheeses, toppings) {
  let pizza = {};
  pizza.crust = crust[Math.floor(Math.random() * crust.length)];
  pizza.sauce = sauce[Math.floor(Math.random() * sauce.length)];
  pizza.chooseCheese = function chooseSomeCheese(cheeses) {
    let amountOfCheeses = Math.ceil(Math.random() * cheeses.length);
    let cheesesSelected = [];
    for (i = 0; i < amountOfCheeses; i++) {
      let cheese = cheeses[Math.floor(Math.random() * amountOfCheeses)];
      while (cheesesSelected.includes(cheese)) {
        cheese = cheeses[Math.floor(Math.random() * amountOfCheeses)];
      }
      cheesesSelected.push(cheese);
    }
    return cheesesSelected;
  };
  pizza.chooseToppings = function chooseSomeToppings(toppings) {
    let amountOfToppings = Math.ceil(Math.random() * toppings.length);
    let toppingsSelected = [];
    for (i = 0; i < amountOfToppings; i++) {
      let topping = toppings[Math.floor(Math.random() * amountOfToppings)];
      while (toppingsSelected.includes(topping)) {
        topping = toppings[Math.floor(Math.random() * amountOfToppings)];
      }
      toppingsSelected.push(topping);
    }
    return toppingsSelected;
  };
  pizza.cheeses = pizza.chooseCheese(cheeses);
  pizza.toppings = pizza.chooseToppings(toppings);
  return pizza;
}

// Variables for the Random Pizza Function
const crustTypes = ["deep dish", "hand tossed", "thin crust", "gluten free"];
const sauceTypes = ["traditional", "marinara", "alfredo", "bbq"];
const cheeseTypes = ["mozzerella", "cheddar", "feta", "gouda", "stinky cheese"];
const toppings = [
  "pepperoni",
  "sausage",
  "bacon",
  "black olives",
  "anchovies",
  "onions",
  "gummy bears",
];

// Making a da Pizzas
const pepPizza = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);

const vegPizza = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);

const randomZa1 = pizzaOvenRandom(
  crustTypes,
  sauceTypes,
  cheeseTypes,
  toppings
);

const randomZa2 = pizzaOvenRandom(
  crustTypes,
  sauceTypes,
  cheeseTypes,
  toppings
);

console.log(pepPizza);
console.log(vegPizza);
console.log(randomZa1);
console.log(randomZa2);
