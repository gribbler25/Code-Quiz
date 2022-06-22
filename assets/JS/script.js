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
//setting the answers Obj and the user Obj to local storage..
localStorage.setItem("questions", JSON.stringify(questions));
var user =
{
    initials: "",
    score: 0
};
localStorage.setItem("userStats", JSON.stringify(user));//and at end of quiz SUBMIT button compare current submitted score to local storage score, post highest.

var pageContentEl = document.querySelector("#content");//container for listening for index.html content changes
var startBtn = document.querySelector("#start-quiz");//Start BUTTON on index.html

var questionH2 = document.createElement("h2");//<h2> to hold QUESTIONS
var timerEl = document.querySelector("#timer");//the TIMER DIV 
var countdownEl = document.createElement("h3");//H3 ELEMENT for the COUNTER value

var quizEl = document.querySelector("#start-container");//container for QUIZ CONTENT
var questionEl = document.querySelector("#questions");//DIV FOR QUESTIONS
var ulistEl = document.querySelector("#list");//<UL> ELEMENT

var correctTxt = document.createElement("h3");
var footerEl = document.querySelector("#correct");//FOOTER <DIV> for correct/ wrong content
var highScore = document.querySelector("#hs"); //DIV for high score text
var clearScore = document.querySelector("#clear");//BUTTON for clearing score

var counter = 30;
var score = 0;
var qIndex = 0;
var highDisplay = function () {
    document.querySelector("#high-score").style.display = "block";
};

var startQuiz = function () {
    //RESET values each re-start
    counter = 30;

    document.querySelector("#high-score").style.display = "none";
    document.querySelector(".intro-start").style.display = "none";

    createCount();

    countdown();

    qIndex = 0;
    // debugger;
    createQuiz(qIndex);



};

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
        window.location.replace("./html/inputinitials.html");

    }
};

var createQuiz = function (qIndex) { //function fromSTART to bring quiz content to the index.html page
    //if I don't put this declaraton here, the qIndex is undefined throughout and function doesn't work
    console.log(questions);
    console.log(qIndex);
    // footerEl.textContent = "";
    ulistEl.textContent = "";
    questionH2.textContent = "";
    //debugger;
    if (qIndex < questions.length) {

        questionH2.textContent = questions[qIndex].title;

        questionEl.appendChild(questionH2);

        for (var i = 0; i < questions[qIndex].choices.length; i++) {
            var btnEl = document.createElement("button");//create the <BUTTON>s that holds the ANSWER choice
            btnEl.className = "list-item";
            btnEl.textContent = questions[qIndex].choices[i];
            if (btnEl.textContent.match(questions[qIndex].answer)) {//if content of the choices matches the content of the current index answer property..
                btnEl.setAttribute("data-id", "correct")//then give a special attribute for marking correct answer
                console.log(btnEl.getAttribute("data-id"));
            }
            ulistEl.appendChild(btnEl);
        }

        correctTxt.textContent = "";

    }
    else {
        localStorage.setItem("score", JSON.stringify(score));
        console.log(score);
        var high = JSON.parse(localStorage.getItem("highScore"));
        if (score > high || high == null) {
            localStorage.setItem("highScore", JSON.stringify(score));
            window.location.replace("./html/inputinitials.html");
        }
        else {
            window.location.replace("./html/inputinitials.html");
        }
    }
};

ulistEl.addEventListener("click", function (event) {

    var isId = event.target.getAttribute("data-id");
    if (isId) {//if there is a special data id attribute, "correct"...
        var correctTxt = document.createElement("h3");
        correctTxt.textContent = "CORRECT!";//then footer text content= "Correct"
        footerEl.appendChild(correctTxt);
        score++;
        console.log(score);
        console.log(correctTxt.textContent);

    }
    else {
        var correctTxt = document.createElement("h3");
        correctTxt.textContent = "WRONG!"; //else, footer textContent = "Wrong!"
        footerEl.appendChild(correctTxt);
        counter = counter - 3;
        console.log(correctTxt.textContent);
    }
    event.stopPropagation();
    qIndex++;
    console.log(qIndex);
    setTimeout(createQuiz(qIndex), 2000);
});


document.querySelector("#hs-btn").addEventListener("click", highDisplay);

startBtn.addEventListener("click", startQuiz);


clearScore.addEventListener("click", function () {//clear scores from top L corner DIV box
    // var none = document.createElement("h3");
    highScore.textContent = "";
    // highScore.appendChild(none);
});
