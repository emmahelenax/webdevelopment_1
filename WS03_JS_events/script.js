// First button 
const clickButton = document.getElementById("clickButton");

clickButton.addEventListener("click", function () {
    alert("You clicked me!");
});

// Second button
const tableButton = document.getElementById("tableButton");

tableButton.addEventListener("click", showTable);


function showTable() {
    const animal = "Cheetah";
    const habitat = "Savannah";
    const diet = "Carnivore";

    const table = `
        <table>
            <thead>
                <tr>
                    <th>Animal</th>
                    <th>Habitat</th>
                    <th>Diet</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${animal}</td>
                    <td>${habitat}</td>
                    <td>${diet}</td>
                </tr>
            </tbody>
        </table>
    `;

    document.querySelector("#tableContainer").innerHTML = table;
}

// Exercise 2: Event Listeners and DOM Manipulation

const headingTwo = document.getElementById("headingTwo");

headingTwo.addEventListener("mouseover", function () {
    console.log("Stepped over me with a mouse!");
});

const headingOne = document.getElementById("headingOne");

headingOne.addEventListener("click", function () {
    headingOne.textContent = "Bye bye mouse!";
    headingOne.style.color = "#97181A";
});


// Exercise 3: The feedback form
const feedback = document.getElementById("feedback");

feedback.addEventListener("focus", function () {
    console.log("Input is focused!");
    document.getElementById("status").textContent = "You are typing feedback...";
    document.getElementById("status").style.color = "#666";
    feedback.style.backgroundColor = "#eed8d5";
});

feedback.addEventListener("blur", function () {
    console.log("Input lost focus!");
    feedback.style.backgroundColor = "white";
});

feedback.addEventListener("input", function () {
    document.getElementById("charcount").textContent = feedback.value.length + "/200";
    document.getElementById("preview").textContent = feedback.value;
});


// Exercise 4: Form submission
const feedbackForm = document.getElementById("feedbackForm");

feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const feedbackLength = feedback.value.length;

    if (feedbackLength < 10 || feedbackLength > 200) {
    document.getElementById("status").textContent = "Feedback must be between 10 and 200 characters.";
    } else { 
        feedbackForm.reset();
        document.getElementById("status").textContent = "Thank you for your feedback!";
    }
});

// Exercise 5: Keyboard events

document.addEventListener("keydown", function (event) {
    console.log(event);

    const keyInfo = document.getElementById("keyInfo");
    const keyBox = document.getElementById("keyBox");

    keyInfo.textContent = `Key pressed: ${event.key} (Code: ${event.code})`;
    keyBox.textContent = event.key;
});

