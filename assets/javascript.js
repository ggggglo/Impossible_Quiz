
var timeLeft = document.querySelector("#timer")
var mainEl = document.querySelector("main")
var yes = document.querySelector("#yes")
var no = document.querySelector("#no")
var nope1 = document.querySelector("#nope1")
var tryagain = document.querySelector("#tryagain")
var house = document.querySelector("#house")
var question1 = document.querySelector("#question1")
var answer1 = document.querySelector("#answer1")
var text1 = document.querySelector("#text1")
var keepgoing = document.querySelector("#keepgoing")
var question2 = document.querySelector("#question2")
var answer2 = document.querySelector("#answer2")
var ok = document.querySelector("#ok")
var text2 = document.querySelector("#text2")
var keepgoing2 = document.querySelector("#keepgoing2")
var question3 = document.querySelector("#question3")
var answer3 = document.querySelector("#answer3")
var spock = document.querySelector("#spock")
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
    question1.style.display = "none";
    answer1.style.display = "none";
    text1.style.display = "block";
    keepgoing.style.display = "block";
});  

keepgoing.addEventListener("click",function(){
    text1.style.display = "none";
    keepgoing.style.display = "none";
    question2.style.display = "block";
    answer2.style.display = "block";
});

ok.addEventListener("click", function(){
    text2.style.display = "block";
    keepgoing2.style.display = "block";
    question2.style.display = "none";
    answer2.style.display = "none";

});

keepgoing2.addEventListener("click", function(){
    text2.style.display = "none";
    keepgoing2.style.display = "none";
    question3.style.display = "block";
    answer3.style.display = "block";
});

spock.addEventListener("click", function(){


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