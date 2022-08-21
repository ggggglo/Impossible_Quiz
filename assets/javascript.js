
var timeLeft = document.querySelector("#timer");
var mainEl = document.querySelector("main");
var yes = document.querySelector("#yes");
var no = document.querySelector("#no");
var house = document.querySelector("#house");
var question1 = document.querySelector("#question1")
var answer1 = document.querySelector("#answer1")
var text1 = document.querySelector("#text1")
var question2 = document.querySelector("#question2")
var answer2 = document.querySelector("#answer2")
var question3 = document.querySelector("#question3")
var answer3 = document.querySelector("#answer3")
var h1 = document.querySelector("h1")
var h2 = document.querySelector("h2")

var secondsLeft = 60;
var wins = 0;
var losses = 0;



yes.addEventListener("click", function(){
    question1.style.display = "block";
    answer1.style.display = "block";
    timeLeft.style.display = "block";
    yes.style.display = "none";
    no.style.display = "none";
    h1.style.display = "none"
    h2.style.display = "none";
    });

house.addEventListener("click",function(){
    wins ++
    question1.style.display = "none";
    answer1.style.display = "none";
    text1.style.display = "block";
})  

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeLeft.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

setTime(); 