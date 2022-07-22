var dishSelection = document.getElementsByName('dish-selection');
var dishGeneratorButton = document.querySelector('.dish-generator');
var potPage = document.querySelector('.pot-page');
var dishPage = document.querySelector('.dish-page');
var dishOutput = document.querySelector('.dish-output');
var clearDishButton = document.querySelector('.clear-dish');
var form = document.querySelector('form');

var menu = {
  sides: [
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots'
  ],
  mains: [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap'
  ],
  desserts: [
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler'
  ]
};

form.addEventListener('change', displayDishGenerator);
dishGeneratorButton.addEventListener('click', displayRandomDish);
clearDishButton.addEventListener('click', clearPages);

function displayDishGenerator() {
  dishGeneratorButton.classList.remove('hidden');
}

function displayRandomDish() {
  displayDishPage();

  for (var i = 0; i < dishSelection.length; i++) {
    if (dishSelection[i].checked) {
      var dishOptions = menu[dishSelection[i].value];
      dishOutput.innerText = `${dishOptions[getRandomIndex(dishOptions)]}!`;
    }
  }
}

function getRandomIndex(dishArray) {
  return Math.floor(Math.random() * dishArray.length);
}

function displayDishPage() {
  dishOutput.innerText = '';
  potPage.classList.add('hidden');
  dishPage.classList.remove('hidden');
}

function clearPages() {
  dishOutput.innerText = '';
  potPage.classList.remove('hidden');
  dishPage.classList.add('hidden');
  dishGeneratorButton.classList.add('hidden');

  for (var i = 0; i < dishSelection.length; i++) {
    if (dishSelection[i].checked) {
      dishSelection[i].checked = false;
    }
  }
}
