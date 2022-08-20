
var timeLeft = document.querySelector("#timer");
var mainEl = document.getElementById("main");

var secondsLeft = 60;

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

function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}