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

var questionH2 = document.createElement("h2");//<h2> to hold QUESTIONS
var timerEl = document.querySelector("#timer");//the TIMER DIV 
var countdownEl = document.createElement("h3");//H3 ELEMENT for the COUNTER value

var quizEl = document.querySelector("#start-container");//container for QUIZ CONTENT
var questionEl = document.querySelector("#questions");//DIV FOR QUESTIONS
var ulistEl = document.querySelector("#list");//<UL> ELEMENT

var footerEl = document.querySelector("#correct");//FOOTER <DIV> for correct/ wrong content

var counter = 20;
var qIndex = 0;


var startQuiz = function () {
    //RESET values each re-start
    counter = 20;
    qIndex = 0;
    document.querySelector("#high-score").style.display = "none";
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
        window.location.replace("./html/inputinitials.html");
    }
};

var createQuiz = function () { //function fromSTART to bring quiz content to the index.html page

    questionH2.textContent = "";
    if (counter > 0) {
        var currentQuest = questions[qIndex];//set the questions[index], the current queston, to a variable
        questionH2.textContent = currentQuest.title;
        questionEl.appendChild(questionH2);

        for (var i = 0; i < currentQuest.choices.length; i++) {
            var btnEl = document.createElement("button");//create the <LI> that holds the ANSWER choice
            btnEl.className = "list-item";
            btnEl.textContent = currentQuest.choices[i];
            if (btnEl.textContent.match(currentQuest.answer)) {//if content of the choices matches the content of the current index answer property..
                btnEl.setAttribute("data-id", "correct")//then give a special attribute for marking correct answer
                console.log(btnEl.getAttribute("data-id"));
            }
            ulistEl.appendChild(btnEl);
        }

        ulistEl.addEventListener("click", function (event) {
            var correctTxt = document.createElement("h3");
            var isId = event.target.getAttribute("data-id");//from here down not working!!(skips to end of fxn)
            if (isId) {//if there is a special data id attribute, "correct"...
                correctTxt.textContent = "CORRECT!";//then footer text content= "Correct"
                footerEl.appendChild(correctTxt);
                //setTimeout(createQuiz(), 2000);
            }
            else {
                correctTxt.textContent = "WRONG!"; //else, footer textContent = "Wrong!"
                footerEl.appendChild(correctTxt);
                //setTimeout(createQuiz(), 2000);
            }
            event.stopPropagation();

        });
        qIndex++;
    }
};


// $("#hs-btn").click(function () {
//     $("#high-score").addClass(".visible");
// });

var highDisplay = function () {
    document.querySelector("#high-score").style.display = "block";
};
document.querySelector("#hs-btn").addEventListener("click", highDisplay);

startBtn.addEventListener("click", startQuiz);

//submitScr.addEventListener('click', loadscores);





//  test function change() {
//     pageContentEl.style.color = "blue";
// };