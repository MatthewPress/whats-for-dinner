# What's for Dinner?

## Overview

What's for dinner? The ultimate question. Use this code base to help give you some inspiration.

![Preview Image](assets/read-me-img.png)

## Setup

- Clone the repository to your local machine
- `cd` into the project
- Select a dish category and then click the "Let's Cook!" button to find something yummy!

## Layout and Style

- Layout and Style is based on a provided comp from The Turing School of Software and Design
- The spec for this project can be found [here](https://frontend.turing.io/projects/module-1/dinner.html).

## Functionality

- Dish selection arrays for side, main dish, dessert are stored in an object in order to access them later with bracket notation
- QuerySelectors for HTML elements needed in JS
- Event listeners on: form, "Let's Cook!" button, "Clear" button
- Event handlers for: form (if a dish category is selected, display "Let's Cook!" button), Let's Cook! (click, get radio button value, find appropriate array, randomly select dish, hide pot section, display dish section), Clear (click, clear dish section, hide dish section, display pot section, clear radio button choice, hide "Let's Cook!" button)

## main: MVP Tasks
* CSS: Position Clear button at bottom right of section/article (make button a part of the section and hide or display it?)
