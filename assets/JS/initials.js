var submitScr = document.querySelector("#submit");//the sumbit BUTTON on inputinitials.html
var highScore = document.querySelector("#final2"); //DIV for high score text
var clearScore = document.querySelector("#clear");//BUTTON for clearing score
var final = document.querySelector("#final");// DIV for end of game score


var setHighScore = function () {//setting score to the high score <div> at end of game
    var none1 = document.createElement("h3");
    var score = JSON.parse(localStorage.getItem("score"));
    var Hscore = JSON.parse(localStorage.getItem("highScore"));
    console.log(score);
    none1.textContent = score;
    final.appendChild(none1);
    highScore.textContent = Hscore;

};

var highDisplay1 = function () {
    document.querySelector("#high-score1").style.display = "block";
};
document.querySelector("#hs-btn1").addEventListener("click", highDisplay1);//when button pressed, view high scores box appears


var saveInitials = function () {//save initials to local storage object
    localStorage.setItem("userStats.initials", JSON.stringify(input.value)); //this is NOT working yet
};
submitScr.addEventListener("submit", saveInitials);

clearScore.addEventListener("click", function () {//clear scores from top L corner DIV box
    // var none = document.createElement("h3");
    highScore.textContent = "";
    // highScore.appendChild(none);
});

setHighScore();