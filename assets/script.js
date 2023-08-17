var quizSection = document.querySelector("#Quiz-section");
var startPage = document.querySelector("#startPage");
var button1 = document.querySelector("#Answer1");
var button2 = document.querySelector("#Answer2");
var button3 = document.querySelector("#Answer3");
var button4 = document.querySelector("#Answer4");
var startButton = document.querySelector("#startQuiz");
var questionEl = document.querySelector("#question");
var qi = -1;
var scores = JSON.parse (localStorage.getItem("scores")) || []
var questions = [
    {
        question:"Arrays in JavaScript can be used to store___?",
        answer1:"1.String",
        answer2:"2.Integer",
        answer3:"3.Array",
        answer4:"4.All of the Above",
        correct:"4.All of the Above"

    },
    {
        question:"String values must be enclosed within ___ when being assigned to variable.",
        answer1:"1.Commas",
        answer2:"2.curly brackets",
        answer3:"3.quotes",
        answer4:"4.parentheses",
        correct:"3.quotes"
    },
    {
        question:"The condition in an if/else statement is enclosed within ___",
        answer1:"1.quotes",
        answer2:"2.curly brackets",
        answer3:"3.parentheses",
        answer4:"4.square brackets",
        correct:"3.parentheses"
    },

        
]
// Set the initial time in seconds
let timeRemaining = 60;
function startQuiz() {
    startPage.style="display:none";
    quizSection.style="display:block";
nextQuestion()

// Update the timer every second
const interval = setInterval(updateTimer, 1000);
function updateTimer() {
    if (timeRemaining <= 0) {
        clearInterval(interval); // Clear the interval when the timer reaches 0
        document.getElementById("timer").innerHTML = "Time's up!";
    } else {
        // Display the remaining time
        document.getElementById("timer").innerHTML = "Time: "+timeRemaining;
        timeRemaining--; // Decrement the time by 1 second
    }
}
}
startButton.addEventListener("click", startQuiz);
function nextQuestion() {
    if (qi>= 0 && this.textContent !== questions[qi].correct) {
        timeRemaining -= 10
    }
    qi++

    if (qi >= questions.length) {
        var score = timeRemaining
        var initials = prompt("enter your initials")
        scores.push(initials + ": " + score)
        document.getElementById("timer").style = "display: none"
        localStorage.setItem("scores", JSON.stringify(scores))
        for (let i = 0; i < scores.length; i++) {
            var li = document.createElement("li")
            li.textContent = scores[i]
            document.querySelector("#score_list").appendChild(li)           
        }
        quizSection.style = "display:none";
    }
if (qi < questions.length) {

questionEl.textContent = questions[qi].question;
button1.textContent = questions[qi].answer1;
button2.textContent = questions[qi].answer2;
button3.textContent = questions[qi].answer3;
button4.textContent = questions[qi].answer4;
}
}
button1.addEventListener("click", nextQuestion)
button2.addEventListener("click", nextQuestion)
button3.addEventListener("click", nextQuestion)
button4.addEventListener("click", nextQuestion)
// create if statement to check if their are no more questions. 
// if true, hide quiz section and show high score section.
if (questions == 0) {
    
}