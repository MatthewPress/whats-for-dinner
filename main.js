var dishSelectorButton = document.querySelector("#dish-selector");
var potPage = document.querySelector(".pot-page");
var dishPage = document.querySelector(".dish-page");

var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots"
];
var mains = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap"
];
var desserts = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler"
];

dishSelectorButton.addEventListener("click", function () {
  randomDish();
  displayDish();
});

function randomDish() {
  // create a random number based off a parameter (the arrays) IOT to index the appropiate array and get the random dish
    // maybe another function that processes the user's click
    // how do radio buttons work?
  // target the p element in the dishPage left blank for this output
    // p element innerText = `${randomDish}!`
}

function displayDish() {
  potPage.classList.toggle("hidden");
  dishPage.classList.toggle("hidden");
}
