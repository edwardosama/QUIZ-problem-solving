const questions = [
  // Level 1 Questions
  { question: "What does HTML stand for?", options: ["Hypertext Markup Language", "Hightext Machine Language", "Hyperloop Markup Language", "None of these"], answer: "Hypertext Markup Language" },
  { question: "What is the correct HTML element for inserting a line break?", options: ["<break>", "<br>", "<lb>", "<linebreak>"], answer: "<br>" },
  { question: "Which of these elements are all <table> elements?", options: ["<table><tr><td>", "<table><head><body>", "<table><row><cell>", "<table><column><row>"], answer: "<table><tr><td>" },
  { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "London"], answer: "Paris" },
  { question: "Which programming language is known as the language of the web?", options: ["Python", "Java", "JavaScript", "C#"], answer: "JavaScript" },
  { question: "Which HTML tag is used to define an internal style sheet?", options: ["<style>", "<css>", "<script>", "<html>"], answer: "<style>" },
  { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
  { question: "Which HTML attribute is used to define inline styles?", options: ["styles", "font", "class", "style"], answer: "style" },
  { question: "Which of the following is not a JavaScript data type?", options: ["Undefined", "Number", "Boolean", "Character"], answer: "Character" },
  { question: "How do you create a function in JavaScript?", options: ["function:myFunction()", "function = myFunction()", "function myFunction()", "myFunction: function()"], answer: "function myFunction()" },
  { question: "How do you call a function named 'myFunction'?", options: ["call myFunction()", "myFunction()", "call function myFunction()", "myFunction.call()"], answer: "myFunction()" },
  { question: "What is the correct way to write a JavaScript array?", options: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']", "var colors = [1:'red', 2:'green', 3:'blue']"], answer: "var colors = ['red', 'green', 'blue']" },
  { question: "How can you add a comment in JavaScript?", options: ["// This is a comment", "<!-- This is a comment -->", "# This is a comment", "'This is a comment"], answer: "// This is a comment" },
  { question: "What does the 'this' keyword refer to in JavaScript?", options: ["The current object", "The previous object", "The next object", "The parent object"], answer: "The current object" },
  { question: "What is the output of 2 + '2' in JavaScript?", options: ["22", "4", "Error", "undefined"], answer: "22" },
  { question: "Which event occurs when the user clicks on an HTML element?", options: ["onclick", "onchange", "onmouseover", "onmouseclick"], answer: "onclick" },
  { question: "How do you declare a variable in JavaScript?", options: ["var myVar", "variable myVar", "v myVar", "myVar = var"], answer: "var myVar" },
  { question: "Which method is used to access an HTML element by its ID?", options: ["getElementById()", "getElement()", "getId()", "querySelector()"], answer: "getElementById()" },
  { question: "Which operator is used to assign a value to a variable?", options: ["=", "==", "===", "==="], answer: "=" },
  { question: "What is the correct way to write a conditional statement in JavaScript?", options: ["if x = 5 then", "if (x == 5)", "if x == 5 then", "if x = 5"], answer: "if (x == 5)" },
  { question: "Which of the following is a JavaScript framework?", options: ["Django", "Flask", "React", "Ruby on Rails"], answer: "React" },
  
  // Level 2 Questions
  { question: "What is the syntax for a for loop in JavaScript?", options: ["for (i=0; i < 5; i++)", "for i = 1 to 5", "for (i < 5; i++)", "for (i=0; i < 5)"], answer: "for (i=0; i < 5; i++)" },
  { question: "Which HTML tag is used to define an unordered list?", options: ["<ol>", "<ul>", "<li>", "<list>"], answer: "<ul>" },
  { question: "Which method can be used to round a number to the nearest integer in JavaScript?", options: ["Math.round()", "Math.rnd()", "Math.ceil()", "Math.floor()"], answer: "Math.round()" },
  { question: "What does JSON stand for?", options: ["JavaScript Object Notation", "Java Source Open Notation", "JavaScript Object Network", "Java Standard Object Notation"], answer: "JavaScript Object Notation" },
  { question: "What is the output of '5' + 1?", options: ["51", "6", "5", "Error"], answer: "51" },
  { question: "Which HTML tag is used to define a paragraph?", options: ["<p>", "<para>", "<paragraph>", "<text>"], answer: "<p>" },
  { question: "Which method is used to remove the last element from an array?", options: ["pop()", "shift()", "slice()", "splice()"], answer: "pop()" },
  { question: "Which of the following is a primitive data type in JavaScript?", options: ["String", "Array", "Object", "Function"], answer: "String" },
  { question: "How do you find the length of an array in JavaScript?", options: ["array.length", "length(array)", "array.size()", "array.count"], answer: "array.length" },
  { question: "Which property is used to change the background color of an element in CSS?", options: ["background-color", "bgcolor", "color", "background"], answer: "background-color" },
  { question: "Which HTML element is used to define the title of a document?", options: ["<meta>", "<title>", "<header>", "<h1>"], answer: "<title>" },
  { question: "Which CSS property is used to change the text color of an element?", options: ["color", "text-color", "font-color", "bgcolor"], answer: "color" },
  { question: "How do you declare a constant in JavaScript?", options: ["const myConst", "constant myConst", "const = myConst", "const myConst = 1"], answer: "const myConst" },
  { question: "What is the result of the expression 'typeof NaN'?", options: ["number", "undefined", "NaN", "string"], answer: "number" },
  { question: "Which operator is used to compare values without considering the data type?", options: ["==", "===", "=", "!=",], answer: "==" },
  { question: "What is the purpose of the 'debugger' statement in JavaScript?", options: ["It stops the execution of the code", "It skips the next line of code", "It sends the output to the console", "None of these"], answer: "It stops the execution of the code" },
  { question: "Which of the following is a valid way to create an object in JavaScript?", options: ["var obj = {}", "var obj = []", "var obj = new Object()", "Both A and C"], answer: "Both A and C" },
  { question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?", options: ["alt", "title", "src", "longdesc"], answer: "alt" },
  { question: "Which method can be used to convert a JSON string into a JavaScript object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"], answer: "JSON.parse()" },
  { question: "How do you declare a function in JavaScript?", options: ["function myFunction()", "myFunction() = function()", "function: myFunction()", "var myFunction = function()"], answer: "function myFunction()" },
  
  // Level 3 Questions
  { question: "What is the purpose of the 'return' statement in JavaScript?", options: ["To return to the previous function", "To stop the execution of the function", "To return a value from the function", "To log the output to the console"], answer: "To return a value from the function" },
  { question: "What is the default value of a variable that has not been assigned a value?", options: ["undefined", "null", "0", "''"], answer: "undefined" },
  { question: "Which of the following is not a valid JavaScript variable name?", options: ["_myVar", "$myVar", "2myVar", "myVar2"], answer: "2myVar" },
  { question: "How do you prevent a form from being submitted in JavaScript?", options: ["event.preventDefault()", "return false;", "Both A and B", "stop.submit()"], answer: "Both A and B" },
  { question: "Which method can be used to add an element to the end of an array?", options: ["push()", "add()", "append()", "insert()"], answer: "push()" },
  { question: "What does 'DOM' stand for?", options: ["Document Object Model", "Data Object Model", "Document Output Model", "Data Output Model"], answer: "Document Object Model" },
  { question: "What is the correct way to add a comment in CSS?", options: ["/* This is a comment */", "// This is a comment", "<!-- This is a comment -->", "# This is a comment"], answer: "/* This is a comment */" },
  { question: "Which of the following is a CSS preprocessor?", options: ["LESS", "SASS", "Stylus", "All of the above"], answer: "All of the above" },
  { question: "What is the correct HTML element for the largest heading?", options: ["<h1>", "<heading>", "<h6>", "<h5>"], answer: "<h1>" },
  { question: "What is the purpose of the 'use strict' statement in JavaScript?", options: ["To enforce stricter parsing and error handling", "To create a new variable scope", "To define a constant variable", "None of these"], answer: "To enforce stricter parsing and error handling" },
  { question: "What is the syntax for importing a module in JavaScript?", options: ["import module from 'module-name'", "require('module-name')", "import('module-name')", "Both A and B"], answer: "Both A and B" },
  { question: "What is the output of the expression 'null == undefined'?", options: ["true", "false", "Error", "undefined"], answer: "true" },
  { question: "Which function is used to parse a string to an integer in JavaScript?", options: ["parseInt()", "parseFloat()", "Number()", "String()"], answer: "parseInt()" },
  { question: "What is the correct syntax to create a new object in JavaScript?", options: ["var obj = new Object()", "var obj = {}", "Both A and B", "var obj = create Object()"], answer: "Both A and B" },
  { question: "What is the purpose of the 'async' keyword in JavaScript?", options: ["To make a function return a promise", "To run a function asynchronously", "To pause the execution of a function", "None of these"], answer: "To make a function return a promise" },
  { question: "Which CSS property is used to control the text size?", options: ["font-size", "text-size", "size", "font"], answer: "font-size" },
  { question: "Which HTML tag is used to create a checkbox?", options: ["<checkbox>", "<input type='checkbox'>", "<input checkbox>", "<check>"], answer: "<input type='checkbox'>" },
  { question: "What is the output of the expression '5 == 5'?", options: ["true", "false", "Error", "undefined"], answer: "true" },
  
  // Level 4 Questions
  { question: "What is the use of the 'try...catch' statement in JavaScript?", options: ["To handle exceptions", "To create a loop", "To declare a variable", "To define a function"], answer: "To handle exceptions" },
  { question: "What does the 'map()' method do in JavaScript?", options: ["Creates a new array", "Transforms each element", "Both A and B", "Filters elements"], answer: "Both A and B" },
  { question: "Which of the following is a feature of ES6?", options: ["Arrow functions", "Let and const", "Template literals", "All of the above"], answer: "All of the above" },
  { question: "Which method is used to convert an object to a JSON string?", options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.toString()"], answer: "JSON.stringify()" },
  { question: "How do you select elements by class name in JavaScript?", options: ["document.getElementsByClassName()", "document.querySelector()", "document.getElementsByClass()", "document.getElementByClassName()"], answer: "document.getElementsByClassName()" },
  { question: "What is the purpose of the 'setTimeout()' function in JavaScript?", options: ["To execute a function after a specified number of milliseconds", "To create a timer", "To delay the execution of a function", "None of these"], answer: "To execute a function after a specified number of milliseconds" },
  { question: "What does the 'filter()' method do in JavaScript?", options: ["Creates a new array with elements that pass a test", "Transforms each element", "Both A and B", "Sorts the array"], answer: "Creates a new array with elements that pass a test" },
  { question: "What is the correct syntax for a switch statement in JavaScript?", options: ["switch (expression) { case: value: break; }", "switch (expression) { case value: break; }", "switch { case: expression: break; }", "switch (expression): { case value: break; }"], answer: "switch (expression) { case value: break; }" },
  { question: "Which of the following is a valid way to declare an array in JavaScript?", options: ["var arr = []", "var arr = new Array()", "var arr = Array()", "All of the above"], answer: "All of the above" },
  { question: "What is the purpose of the 'localStorage' object in JavaScript?", options: ["To store data for the session", "To store data permanently in the browser", "To store cookies", "None of these"], answer: "To store data permanently in the browser" },
  { question: "What is the output of the expression '5 + '5''?", options: ["10", "'55'", "'5' + 5", "'5'"], answer: "'55'" },
  { question: "Which operator is used for strict equality comparison in JavaScript?", options: ["==", "===", "=", "!=="], answer: "===" },
  { question: "How do you define a promise in JavaScript?", options: ["new Promise()", "Promise()", "new Promise(function(resolve, reject) {})", "Both A and C"], answer: "Both A and C" },
  { question: "What is the output of the expression '[] + []'?", options: ["0", "''", "undefined", "NaN"], answer: "''" },
  { question: "Which method can be used to remove the last element from an array?", options: ["pop()", "shift()", "remove()", "slice()"], answer: "pop()" },
  { question: "What does 'JSON' stand for?", options: ["JavaScript Object Notation", "JavaScript Online Notation", "JavaScript Object Name", "JavaScript Open Notation"], answer: "JavaScript Object Notation" },
  
  // Level 5 Questions
  { question: "What is closure in JavaScript?", options: ["A function within a function", "A way to keep variables private", "Both A and B", "None of these"], answer: "Both A and B" },
  { question: "What is the purpose of the 'this' keyword in JavaScript?", options: ["To refer to the current object", "To refer to the global object", "To refer to the parent function", "All of the above"], answer: "To refer to the current object" },
  { question: "What are 'async' and 'await' in JavaScript?", options: ["Keywords for asynchronous programming", "Used for handling promises", "Both A and B", "None of these"], answer: "Both A and B" },
  { question: "What does the 'reduce()' method do in JavaScript?", options: ["Executes a reducer function on each element", "Creates a new array", "Both A and B", "Filters elements"], answer: "Executes a reducer function on each element" },
  { question: "What is the output of the expression 'false + 1'?", options: ["1", "0", "NaN", "undefined"], answer: "1" },
  { question: "Which of the following is an advantage of using JavaScript frameworks?", options: ["Faster development", "Better maintainability", "Both A and B", "None of these"], answer: "Both A and B" },
  { question: "What is the purpose of the 'new' keyword in JavaScript?", options: ["To create a new object", "To create a new function", "To create a new variable", "To create a new class"], answer: "To create a new object" },
  { question: "Which method is used to merge two arrays in JavaScript?", options: ["concat()", "merge()", "combine()", "join()"], answer: "concat()" },
  { question: "What is the output of the expression 'undefined == null'?", options: ["true", "false", "Error", "undefined"], answer: "true" },
  { question: "What is the main purpose of the 'eval()' function in JavaScript?", options: ["To evaluate JavaScript code", "To execute a string as code", "Both A and B", "None of these"], answer: "Both A and B" },
  { question: "What is a 'callback' in JavaScript?", options: ["A function passed to another function", "A function that calls another function", "Both A and B", "None of these"], answer: "A function passed to another function" },
  { question: "What is the difference between 'null' and 'undefined'?", options: ["'null' is an object, 'undefined' means no value", "'null' means no value, 'undefined' is an object", "Both are the same", "None of these"], answer: "'null' is an object, 'undefined' means no value" },
  { question: "What does the 'splice()' method do in JavaScript?", options: ["Adds/removes items from an array", "Creates a new array", "Both A and B", "Filters elements"], answer: "Adds/removes items from an array" },
  { question: "Which method can be used to check if an array contains a specific element?", options: ["includes()", "has()", "exists()", "contains()"], answer: "includes()" },
  { question: "What is the purpose of the 'fetch()' method in JavaScript?", options: ["To make network requests", "To fetch data from the server", "Both A and B", "None of these"], answer: "Both A and B" },
  { question: "What is the purpose of the 'forEach()' method in JavaScript?", options: ["To iterate over arrays", "To execute a function on each array element", "Both A and B", "None of these"], answer: "Both A and B" },
];

// Quiz variables
let currentQuestionIndex = 0;
let score = 0;
let currentLevel = 1;
const questionsPerLevel = 20; // Each level contains 20 questions
const totalLevels = 5; // 5 levels in total

// Elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const progressBarEl = document.getElementById("progress-bar");
const levelEl = document.getElementById("level");
const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");

// Timer variables
let timeLeft = 30;
let timerInterval;

// Function to display the current question
function displayQuestion() {
    clearInterval(timerInterval);
    const currentQuestion = questions[currentQuestionIndex];
    
    // Update the question and options
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = ""; // Clear previous options

    currentQuestion.options.forEach(option => {
        const optionBtn = document.createElement("button");
        optionBtn.textContent = option;
        optionBtn.classList.add("option-btn");
        optionBtn.addEventListener("click", () => checkAnswer(option));
        optionsEl.appendChild(optionBtn);
    });

    // Update the progress bar and level display
    levelEl.textContent = `Level: ${currentLevel}`;
    const progress = (currentQuestionIndex % questionsPerLevel) / questionsPerLevel * 100;
    progressBarEl.style.width = progress + "%";

    // Start the timer
    timeLeft = 30;
    timerEl.textContent = `Time left: ${timeLeft}s`;
    timerInterval = setInterval(updateTimer, 1000);
}

// Function to update the timer
function updateTimer() {
    timeLeft--;
    timerEl.textContent = `Time left: ${timeLeft}s`;
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        nextQuestion();
    }
}

// Function to check the answer
function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    nextQuestion();
}

// Function to go to the next question or level
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex % questionsPerLevel === 0) {
        currentLevel++;
        if (currentLevel > totalLevels) {
            endQuiz();
            return;
        }
    }

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

// Function to end the quiz
function endQuiz() {
    clearInterval(timerInterval);
    questionEl.textContent = `Quiz completed! Your score is ${score}/${questions.length}.`;
    optionsEl.innerHTML = ""; // Clear the options
    progressBarEl.style.width = "100%"; // Full progress bar
}

// Start button click event
startBtn.addEventListener("click", function() {
    startBtn.style.display = "none"; // Hide the start button
    displayQuestion(); // Start the quiz
});

