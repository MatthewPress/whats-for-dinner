var dishSelection = document.getElementsByName("dish-selection");
var dishGeneratorButton = document.querySelector("#dish-selector");
var potPage = document.querySelector(".pot-page");
var dishPage = document.querySelector(".dish-page");
var dishOutput = document.querySelector("#dish");
var clearDishButton = document.querySelector("#clear-dish");



var menu = {
  sides: [
    "Miso Glazed Carrots",
    "Coleslaw",
    "Garden Salad",
    "Crispy Potatoes",
    "Sweet Potato Tots"
  ],
  mains: [
    "Spaghetti and Meatballs",
    "Pineapple Chicken",
    "Shakshuka",
    "Thai Yellow Curry",
    "Bibimbap"
  ],
  desserts: [
    "Apple Pie",
    "Lemon Meringue Pie",
    "Black Forest Cake",
    "Banana Bread",
    "Peach Cobbler"
  ]
};

dishGeneratorButton.addEventListener("click", displayRandomDish);
clearDishButton.addEventListener("click", toggleDishPage);

function getRandomIndex(dishArray) {
  return Math.floor(Math.random() * dishArray.length);
}

function displayRandomDish() {
  toggleDishPage();

  for (var i = 0; i < dishSelection.length; i++) {
    if (dishSelection[i].checked) {
      var dishOptions = menu[dishSelection[i].value];
      dishOutput.innerText = `${dishOptions[getRandomIndex(dishOptions)]}!`;
    }
  }
}

function toggleDishPage() {
  dishOutput.innerText = "";
  potPage.classList.toggle("hidden");
  dishPage.classList.toggle("hidden");
}
