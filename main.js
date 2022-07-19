var dishSelectorButton = document.querySelector("#dish-selector");
var potPage = document.querySelector(".pot-page");
var dishPage = document.querySelector(".dish-page");
var clearDishButton = document.querySelector("#clear-dish");
var dish = document.querySelector("#dish");
var dishSelection = document.getElementsByName("dish-selection");

var menus = {
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

dishSelectorButton.addEventListener("click", getRandomDish);
clearDishButton.addEventListener("click", displayDishPage);

function getRandomIndex(dishArray) {
  return Math.floor(Math.random() * dishArray.length);
}

function getRandomDish() {
  displayDishPage();

  for (var i = 0; i < dishSelection.length; i++) {
    if (dishSelection[i].checked) {
      var dishOptions = menus[dishSelection[i].value];
      dish.innerText = `${dishOptions[getRandomIndex(dishOptions)]}!`;
    }
  }
}

function displayDishPage() {
  dish.innerText = "";
  potPage.classList.toggle("hidden");
  dishPage.classList.toggle("hidden");
}
