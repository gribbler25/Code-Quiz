var submitScr = document.querySelector("#submit");//the sumbit BUTTON on inputinitials.html


var highDisplay1 = function () {
    document.querySelector("#high-score1").style.display = "block";
};
document.querySelector("#hs-btn1").addEventListener("click", highDisplay1);

var final = localStorage.getItem("score");
var finScore = document.querySelector("#final");
var score = document.createElement("h3");
score.textContent = final;
finScore.appendChild(score);

var saveInitials = function () {
    localStorage.setItem("initials", JSON.stringify(input.value)); //this is NOT working yet
};

submitScr.addEventListener("submit", saveInitials);