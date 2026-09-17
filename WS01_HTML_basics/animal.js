// Exercise 1. When user clicks the button, show a message about cheetahs.

const animalButton = document.getElementById("animalButton");

animalButton.addEventListener("click", function () {
    alert("Cheetahs are the fastest land animals!");
});

// click = event
// addEventListener = method (listens for the event)
// function = what happens after the event

// Exercise 2. ID HTML defines the page. The browser creates the DOM, and JS can use the DOM

const animalTitle = document.getElementById("animalTitle");

animalTitle.addEventListener("click", function () {
    animalTitle.textContent = "My Favourite Animal is a Cheetah!";
});

// Exercise 3. Mouseover

const animalImage = document.querySelector("img");

animalImage.addEventListener("mouseover", function () {
    console.log("Mouse is over the image!");
});

// Exercise 4. Input event. 

const animalInput = document.getElementById("animalInput");
const animalOutput = document.getElementById("animalOutput");

animalInput.addEventListener("input", function () {
    animalOutput.textContent = animalInput.value;
}); 

animalInput.addEventListener("focus", function () {
    console.log("Input is focused!");
});

animalInput.addEventListener("blur", function () {
    console.log("Input lost focus!");
});

// Exercise 5. Form submission

const animalForm = document.getElementById("animalForm");

animalForm.addEventListener("submit", function (event) {
    event.preventDefault();
    animalOutput.textContent = "Your favourite animal is: " + animalInput.value;
    console.log("Form submitted with animal: " + animalInput.value);
});

// Exercise 6. Key down demonstration

document.addEventListener("keydown", function (event) {
    console.log("Key pressed: " + event.key);
});


