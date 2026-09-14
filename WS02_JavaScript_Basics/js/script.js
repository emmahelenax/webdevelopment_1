// STEP 1: Print text to the browser console is string ""

console.log("Hello World!");

// STEP 2: Variables

// Store text values in variables
const userName = "Emma";
const favoriteAnimal = "Cheetah";


// Print the variables to the console
console.log("My name is " + userName);
console.log("My favorite animal is " + favoriteAnimal);


// STEP 3: User interaction

// Display a pop-up message
alert("Welcome to my awesome website!");

// Ask the user for their name
const visitorName = prompt("What is your name?");

// Ask the user for their age
const visitorAge = prompt("How old are you?");

if (visitorAge < 18) {
  alert("You are a minor.");
}

else if (visitorAge >= 18) {
  alert("You are an adult.");
}

// Print the user's answer
console.log(visitorName);
console.log(visitorAge);

function greetUser(visitorName) {console.log("Hello, " + visitorName + "! Welcome to the JavaScript course!");}

// Ask the user for their favorite animal
const visitorFavoriteAnimal = prompt("What is your favorite animal?");

// Create a sentence using both answers
console.log("Hello, " + visitorName + "! Your favorite animal is " + visitorFavoriteAnimal + ".");

function showMessage() {
    alert("My JavaScript works! Amazing!");
}

// ⭐⭐ BONUS Ask the user for their favorite animal.If their favorite animal is "Blue Elephant", print: Great choice! That's my favorite animal too!
// ⭐⭐ BONUS Otherwise, print: Nice! Your favorite animal is [animal]. Can you figure out how to do this using if / else?

if(visitorFavoriteAnimal === "Cheetah") {
    console.log("Great choice! That's my favorite animal too!");
}
else {
    console.log("Nice! Your favorite animal is " + visitorFavoriteAnimal + ".");
}
