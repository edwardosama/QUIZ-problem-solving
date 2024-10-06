// Array of questions
const questions = [
    {
        question: "What is the output of 2 + 2 in JavaScript?",
        options: ["2", "4", "22", "NaN"],
        answer: "4"
    },
    {
        question: "Which HTML tag is used to include JavaScript code?",
        options: ["<script>", "<style>", "<link>", "<div>"],
        answer: "<script>"
    },
    {
        question: "What is the keyword to declare a constant in JavaScript?",
        options: ["const", "let", "var", "constant"],
        answer: "const"
    },
    {
        question: "Which method is used to find an element by its ID in JavaScript?",
        options: ["getElementById()", "getElementByTag()", "querySelector()", "findById()"],
        answer: "getElementById()"
    },
    // Add more questions here (up to 100 questions)
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

