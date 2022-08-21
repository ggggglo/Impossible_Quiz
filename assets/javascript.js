
var timeLeft = document.querySelector("#timer");
var mainEl = document.querySelector("main");
var yes = document.querySelector("#yes");
var no = document.querySelector("#no");
var question1 = document.querySelector("#question1")
var answer1 = document.querySelector("#answer1")
var question2 = document.querySelector("#question2")
var answer2 = document.querySelector("#answer2")
var question3 = document.querySelector("#question3")
var answer3 = document.querySelector("#answer3")
var header = document.querySelector("h1")

var secondsLeft = 60;

yes.addEventListener("click", function(){
    question1.style.display = "block";
    answ
    timeLeft.style.display = "block";
    yes.style.display = "none";
    no.style.display = "none";
    header.style.display = "none"
    });

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

function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime(); 