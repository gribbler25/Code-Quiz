var submitScr = document.querySelector("#submit");//the sumbit BUTTON on inputinitials.html
var highScore = document.querySelector("#final2"); //DIV for high score text
var clearScore = document.querySelector("#clear");//BUTTON for clearing score
var final = document.querySelector("#final");


var setHighScore = function () {//setting score to the high score <div> at end of game
    var none1 = document.createElement("h3");
    var score = localStorage.getItem("score");
    none1.textContent = score;
    final.appendChild(none1);
};
setHighScore();

var highDisplay1 = function () {
    document.querySelector("#high-score1").style.display = "block";
};
document.querySelector("#hs-btn1").addEventListener("click", highDisplay1);


var saveInitials = function () {//save initials to local storage..
    localStorage.setItem("userStats", JSON.stringify(input.value)); //this is NOT working yet
};
submitScr.addEventListener("submit", saveInitials);

clearScore.addEventListener("click", function () {//clear scores
    var none = document.createElement("h3");
    none.textContent = "0";
    highScore.appendChild(none);

})