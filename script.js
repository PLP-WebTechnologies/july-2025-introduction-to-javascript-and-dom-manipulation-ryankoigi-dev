// ========================
// Part 1: Variables & Conditionals
// ========================
document.getElementById("greetBtn").addEventListener("click", function() {
  let name = document.getElementById("username").value; // variable to hold input
  let greeting = "";

  // conditional logic
  if (name.trim() === "") {
    greeting = "Please enter your name!";
  } else if (name.toLowerCase() === "ryan") {
    greeting = "Welcome back, Ryan! ";
  } else {
    greeting = "Hello, " + name + "! Nice to meet you.";
  }

  document.getElementById("greeting").textContent = greeting;
});


// ========================
// Part 2: Functions
// ========================

// function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

// function to format a result nicely
function displayResult(result) {
  document.getElementById("sumResult").textContent = "Result: " + result;
}

document.getElementById("calcBtn").addEventListener("click", function() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  // check if inputs are valid
  if (isNaN(num1) || isNaN(num2)) {
    displayResult("❌ Please enter valid numbers.");
  } else {
    let sum = addNumbers(num1, num2);
    displayResult(sum);
  }
});


// ========================
// Part 3: Loops
// ========================
let fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes", "🍍 Pineapple"];

document.getElementById("listBtn").addEventListener("click", function() {
  let list = document.getElementById("fruitList");
  list.innerHTML = ""; // clear previous list

  // using for loop
  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    list.appendChild(li);
  }

  // using forEach loop to add an extra item
  fruits.forEach(fruit => {
    console.log("I love " + fruit); // logs in console
  });
});


// ========================
// Part 4: DOM Manipulation
// ========================
document.getElementById("toggleBtn").addEventListener("click", function() {
  // toggle background theme
  document.body.classList.toggle("dark-mode");
  document.getElementById("statusMsg").textContent = "Background toggled!";
});

document.getElementById("createBtn").addEventListener("click", function() {
  // create new element
  let newMessage = document.createElement("p");
  newMessage.textContent = "✨ New message added at " + new Date().toLocaleTimeString();
  document.body.appendChild(newMessage);
  document.getElementById("statusMsg").textContent = "New message created!";
});
