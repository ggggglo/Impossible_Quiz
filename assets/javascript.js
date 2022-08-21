
var timeLeft = document.querySelector("#timer");
var mainEl = document.getElementById("main");
var yes = document.getElementById("#yes");
var no = document.getElementById("#no");
var questions = document.getElementById(".questions")
var questions = document.getElementById(".answers")

var secondsLeft = 60;

document.getElementById(".questions").style.display = "none";

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
sendMessage(); 