// the questions array of objects to be used in a for loop in Start Quiz fxn
var questions = [
    {
        id: 0,
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        id: 1,
        title: "The condition in an if / else statement is enclosed within ____. ",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "parentheses"
    },
    {
        id: 2,
        title: "Arrays in JavaScript can be used to store _____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above "],
        answer: "all of the above"
    },
    {
        id: 3,
        title: "String values must be enclosed within ____when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        id: 4,
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    }
];

var User = //use this object to store high score/initials in local storage
{
    initials: "",
    Score: 0
};//and at end of quiz SUBMIT button compare current submitted score to local storage score, post highest.

var pageContentEl = document.querySelector("#content");//container for listening for index.html content changes
var startBtn = document.querySelector("#start-quiz");//Start BUTTON on index.html
var submitScr = document.querySelector("#submit");//the sumbit BUTTON on inputinitials.html
var timerEl = document.querySelector("#timer");//the TIMER DIV 
var countdownEl = document.createElement("h3");//H3 ELEMENT for the COUNTER value

var quizEl = document.querySelector("#start-container");//container for QUIZ CONTENT
var questionEl = document.querySelector("#questions");//DIV FOR QUESTIONS
var ulistEl = document.querySelector("#list");//<UL> ELEMENT

var counter = 60;
var qIndex = 0;

var startQuiz = function () {
    //RESET values each re-start
    counter = 60;
    qIndex = 0;

    createCount();

    countdown();

    createQuiz();

}

var createCount = function () {//function fromSTART (maybe move?)
    countdownEl.textContent = counter;
    countdownEl.className = "count";
    timerEl.appendChild(countdownEl);
};

var intervalId = null;
var countdown =//function fromSTART
    function () {
        intervalId = setInterval(decrement, 1000);//set the countdown to a var that can be cleared
    };
var decrement = function () {
    if (counter > 0) {
        counter--;
        countdownEl.textContent = counter;
    }
    else {
        clearInterval(intervalId);
    }
};

var createQuiz = function () { //function fromSTART to bring quiz content to the index.html page
    var question = document.createElement("h2");
    while (qIndex < questions.length) {
        if (counter == 0) {
            //go to the initials.html page
        }
        var currentQuest = questions[qIndex];//set the questions[index] to a variable
        question.textContent = "";
        question.textContent = currentQuest.title;
        questionEl.appendChild(question);

        for (var i = 0; i < currentQuest.choices.length; i++) {
            var listEl = document.createElement("li");
            listEl.className = "list-item";
            listEl.textContent = currentQuest.choices[i];
            ulistEl.appendChild(listEl);

        }

        qIndex++;
    };
    //go to inputinitials.html
};
//createCount();

//
startBtn.addEventListener("click", startQuiz);
//submitScr.addEventListener('click', loadscores());



//  test function change() {
//     pageContentEl.style.color = "blue";
// };