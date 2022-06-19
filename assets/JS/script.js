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


var footerEl = document.querySelector("#correct");//FOOTER <DIV> for correct/ wrong content

var counter = 10;
var qIndex = 0;

var startQuiz = function () {
    //RESET values each re-start
    counter = 10;
    qIndex = 0;
    document.querySelector(".intro-start").style.display = "none";

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
    var questionH2 = document.createElement("h2");
    if (counter > 0) {
        var currentQuest = questions[qIndex];//set the questions[index], the current queston, to a variable
        questionH2.textContent = "";
        questionH2.textContent = currentQuest.title;
        questionEl.appendChild(questionH2);
        //debugger;
        for (var i = 0; i < currentQuest.choices.length; i++) {
            var listEl = document.createElement("li");//create the <LI> that holds the ANSWER choice
            listEl.className = "list-item";
            listEl.textContent = currentQuest.choices[i];
            if (listEl.textContent.match(currentQuest.answer)) {//if content of the choices matches the content of the current index answer property..
                listEl.setAttribute("data-id", "right")//then give a special attribute for marking correct answer
            }
            ulistEl.appendChild(listEl);
        }
        // choiceHandler();
        listEl.addEventListener("click", function () {
            var correctTxt = document.createElement("h3");
            var isId = listEl.getAttribute("data-id");
            if (isId = "right") {//if there is a special data id attribute, "right"...
                correctTxt.textContent = "CORRECT!";//then footer text content= "Correct"
                footerEl.appendChild(correctTxt);
            }
            else {
                correctTxt.textContent = "WRONG!"; //else, footer textContent = "Wrong!"
                footerEl.appendChild(correctTxt);
            }
        });
        qIndex++;
        //createQuiz();
    }
    else {
        window.location.replace("./html/inputinitials.html")
    }
};



// var choiceHandler = function () {
//     var correctTxt = document.createElement("h3");
//     var isId = listEl.getAttribute("data id");
//     if (isId) {
//         correctTxt.textContent = "CORRECT!";//then footer text content= "Correct"
//         footerEl.appendChild(correctTxt);
//     }
//     else {
//         correctTxt.textContent = "WRONG!"; //else, footer textContent = "Wrong!"
//     }
// };

startBtn.addEventListener("click", startQuiz);
//submitScr.addEventListener('click', loadscores());



//  test function change() {
//     pageContentEl.style.color = "blue";
// };