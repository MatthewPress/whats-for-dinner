# What's for Dinner?

## Overview

What's for dinner? The ultimate question. You will be building an app that helps users choose a recipe and put together meals.

This Solo Challenge gives students and instructors the opportunity to get a pulse on where you are with the foundational concepts of Module 1 curriculum. Students should use this as an opportunity to challenge themselves and work completely independently. Google can (and probably should!) be used, but any other code base should not be referenced. Instructors will be able to use your work, both completion of functionality and code quality, to determine where you stand and if you are behind for this point in the module, provide supports to intervene.

The spec for this project can be found [here](https://frontend.turing.io/projects/module-1/dinner.html).

## Learning Goals

- Gain experience building an application that utilizes HTML, CSS and JavaScript
- Write HTML and CSS to match a provided comp
- Understand how to listen to and respond to user events
- Individualize your programming skill set

## Setup

- Fork this project to your own Github account
- Clone the repository to your local machine
- `cd` into the project
- Read this README thoroughly, then begin working!

## main: MVP Tasks
* CSS: Position Clear button at bottom right of section/article

## main: Completed Tasks:
* HTML: Create a draft HTML: header, one section w/ a radio buttons form, one section that holds the pot, one section that displays the dish where the pot use to be w/ clear button
* HTML: head and meta data
* HTML: add classes and ids
* JS: Create some dish arrays for side, main dish, dessert / store in object for bracket notation
* JS: querySelectors for elements needed in JS
* JS: Event listeners on the buttons: Let's Cook, Clear
* JS: Event handlers: Let's Cook (click, get radio button value, find appropriate array, randomly select dish, hide pot section, display dish section), Clear (click, clear dish section, hide dish section, display pot section, clear radio button choice)
* CSS: Match comp

## error: (CYOA) Error Handling and Clear Button
* User should not be able to click the “Let’s Cook” button for a recipe unless they have selected an option.
* Disable button and have some visible display to the user that the button is disabled

## error: Completed Tasks:
* The user can click a clear button, which clears the page of any message. User should only be able to click the clear button if a food is visible. When the clear button is clicked and the food is removed, the image of the cookpot should re-appear.
