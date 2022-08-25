var body = document.querySelector("#body")
var timeLeft = document.querySelector("#timer")
var mainEl = document.querySelector("main")
var yes = document.querySelector("#yes")
var no = document.querySelector("#no")
var nope1 = document.querySelector("#nope1")
var playagain = document.querySelector("#playagain")
var tryagain = document.querySelector("#tryagain")
var house = document.querySelector("#house")
var form = document.querySelector("#form")
var p = document.querySelector("p")

var nope1 = document.querySelector("#nope1")
var nopetext1 = document.querySelector("#nopetext1")
var nope12 = document.querySelector("#nope12")
var nopetext12 = document.querySelector("#nopetext12")
var nope13 = document.querySelector("#nope13")
var nopetext13 = document.querySelector("#nopetext13")
var nope14 = document.querySelector("#nope14")
var nopetext14 = document.querySelector("#nopetext14")


var nope2 = document.querySelector("#nope2")
var nopetext2 = document.querySelector("#nopetext2")
var nope23 = document.querySelector("#nope23")
var nopetext23 = document.querySelector("#nopetext23")
var nope24 = document.querySelector("#nope24")
var nopetext24 = document.querySelector("#nopetext24")

var nope3 = document.querySelector("#nope3")
var nopetext3 = document.querySelector("#nopetext3")
var nope32 = document.querySelector("#nope32")
var nopetext32 = document.querySelector("#nopetext32")
var nope34 = document.querySelector("#nope34")
var nopetext34 = document.querySelector("#nopetext34")

var nope4 = document.querySelector("#nope4")
var nopetext4 = document.querySelector("#nopetext4")
var nope42 = document.querySelector("#nope42")
var nopetext42 = document.querySelector("#nopetext42")
var nope43 = document.querySelector("#nope43")
var nopetext43 = document.querySelector("#nopetext43")
var nope44 = document.querySelector("#nope44")
var nopetext44 = document.querySelector("#nopetext44")

var question1 = document.querySelector("#question1")
var answer1 = document.querySelector(".answer1")
var text1 = document.querySelector("#text1")
var keepgoing = document.querySelector("#keepgoing")
var question2 = document.querySelector("#question2")
var answer2 = document.querySelector(".answer2")
var ok = document.querySelector("#ok")
var text2 = document.querySelector("#text2")
var keepgoing2 = document.querySelector("#keepgoing2")
var question3 = document.querySelector("#question3")
var answer3 = document.querySelector("#answer3")
var spock = document.querySelector("#spock")
var text3 = document.querySelector("#text3")
var keepgoing3 = document.querySelector("#keepgoing3")
var question4 = document.querySelector("#question4")
var gotit = document.querySelector ("#gotit")
var answer4 = document.querySelector(".answer4")
var thisanswer = document.querySelector("#thisanswer")
var wincount = document.querySelector("#wincount")
var losscount = document.querySelector("#losscount")
var h1 = document.querySelector("h1")
var h2 = document.querySelector("h2")
var losttext = document.querySelector("#losttext")

var secondsLeft = 60;
var wins = 0;
var losses = 0;

yes.addEventListener("click", function(){
    question1.style.display = "block";
    nope1.style.display = "block";
    nope12.style.display = "block";
    nope13.style.display = "block";
    nope14.style.display = "block";
    timeLeft.style.display = "block";
    yes.style.display = "none";
    no.style.display = "none";
    h1.style.display = "none"
    h2.style.display = "none";
    });

house.addEventListener("click",function(){
    question1.style.display = "none";
    nope1.style.display = "none";
    nope12.style.display = "none";
    nope13.style.display = "none";
    nope14.style.display = "none";
    text1.style.display = "block";
    keepgoing.style.display = "block";
});  

nope1.addEventListener("click", function(){
    secondsLeft -= 3;
    question1.style.display = "none";
    nope1.style.display = "none";
    nope12.style.display = "none";
    nope13.style.display = "none";
    nope14.style.display = "none";
    nopetext1.style.display = "block";
});

nopetext1.addEventListener("click", function(){
    question1.style.display = "block";
    nope1.style.display = "block";
    nope12.style.display = "block";
    nope13.style.display = "block";
    nope14.style.display = "block";
    timeLeft.style.display = "block";
    nopetext1.style.display = "none";
});

nope12.addEventListener("click", function(){
    secondsLeft -= 3;
    question1.style.display = "none";
    nope1.style.display = "none";
    nope12.style.display = "none";
    nope13.style.display = "none";
    nope14.style.display = "none";
    nopetext12.style.display = "block";
});

nopetext12.addEventListener("click", function(){
    question1.style.display = "block";
    nope1.style.display = "block";
    nope12.style.display = "block";
    nope13.style.display = "block";
    nope14.style.display = "block";
    timeLeft.style.display = "block";
    nopetext12.style.display = "none";
});

nope13.addEventListener("click", function(){
    secondsLeft -= 3;
    question1.style.display = "none";
    nope1.style.display = "none";
    nope12.style.display = "none";
    nope13.style.display = "none";
    nope14.style.display = "none";
    nopetext13.style.display = "block";
});

nopetext13.addEventListener("click", function(){
    question1.style.display = "block";
    nope1.style.display = "block";
    nope12.style.display = "block";
    nope13.style.display = "block";
    nope14.style.display = "block";
    timeLeft.style.display = "block";
    nopetext13.style.display = "none";
});

nope14.addEventListener("click", function(){
    secondsLeft -= 3;
    question1.style.display = "none";
    nope1.style.display = "none";
    nope12.style.display = "none";
    nope13.style.display = "none";
    nope14.style.display = "none";
    nopetext14.style.display = "block";
});

nopetext14.addEventListener("click", function(){
    question1.style.display = "block";
    nope1.style.display = "block";
    nope12.style.display = "block";
    nope13.style.display = "block";
    nope14.style.display = "block";
    timeLeft.style.display = "block";
    nopetext14.style.display = "none";
});

keepgoing.addEventListener("click",function(){
    text1.style.display = "none";
    keepgoing.style.display = "none";
    question2.style.display = "block";
    ok.style.display = "block";
    nope2.style.display = "block";
    nope23.style.display = "block";
    nope24.style.display = "block";
});

nope2.addEventListener("click", function(){
    secondsLeft -= 3;
    question2.style.display = "none";
    ok.style.display = "none";
    nope2.style.display = "none";
    nope23.style.display = "none";
    nope24.style.display = "none";
    nopetext2.style.display = "block";
});

nopetext2.addEventListener("click", function(){
    question2.style.display = "block";
    ok.style.display = "block";
    nope2.style.display = "block";
    nope23.style.display = "block";
    nope24.style.display = "block";
    timeLeft.style.display = "block";
    nopetext2.style.display = "none";
});

nope23.addEventListener("click", function(){
    secondsLeft -= 3;
    question2.style.display = "none";
    ok.style.display = "none";
    nope2.style.display = "none";
    nope23.style.display = "none";
    nope24.style.display = "none";
    nopetext23.style.display = "block";
});

nopetext23.addEventListener("click", function(){
    question2.style.display = "block";
    ok.style.display = "block";
    nope2.style.display = "block";
    nope23.style.display = "block";
    nope24.style.display = "block";
    timeLeft.style.display = "block";
    nopetext23.style.display = "none";
});


nope24.addEventListener("click", function(){
    secondsLeft -= 3;
    question2.style.display = "none";
    ok.style.display = "none";
    nope2.style.display = "none";
    nope23.style.display = "none";
    nope24.style.display = "none";
    nopetext24.style.display = "block";
});


nopetext24.addEventListener("click", function(){
    question2.style.display = "block";
    ok.style.display = "block";
    nope2.style.display = "block";
    nope23.style.display = "block";
    nope24.style.display = "block";
    timeLeft.style.display = "block";
    nopetext24.style.display = "none";
});


ok.addEventListener("click", function(){
    text2.style.display = "block";
    keepgoing2.style.display = "block";
    question2.style.display = "none";
    ok.style.display = "none";
    nope2.style.display = "none";
    nope23.style.display = "none";
    nope24.style.display = "none";
});

keepgoing2.addEventListener("click", function(){
    text2.style.display = "none";
    keepgoing2.style.display = "none";
    question3.style.display = "block";
    spock.style.display = "block";
    nope3.style.display = "block";
    nope32.style.display = "block";
    nope34.style.display = "block";
});

nope3.addEventListener("click", function(){
    secondsLeft -= 3;
    question3.style.display = "none";
    spock.style.display = "none";
    nope3.style.display = "none";
    nope32.style.display = "none";
    nope34.style.display = "none";
    nopetext3.style.display = "block";
});

nopetext3.addEventListener("click", function(){
    question3.style.display = "block";
    spock.style.display = "block";
    nope3.style.display = "block";
    nope32.style.display = "block";
    nope34.style.display = "block";
    timeLeft.style.display = "block";
    nopetext3.style.display = "none";
});

nope32.addEventListener("click", function(){
    secondsLeft -= 3;
    question3.style.display = "none";
    spock.style.display = "none";
    nope3.style.display = "none";
    nope32.style.display = "none";
    nope34.style.display = "none";
    nopetext32.style.display = "block";
});

nopetext32.addEventListener("click", function(){
    question3.style.display = "block";
    spock.style.display = "block";
    nope3.style.display = "block";
    nope32.style.display = "block";
    nope34.style.display = "block";
    timeLeft.style.display = "block";
    nopetext32.style.display = "none";
});


nope34.addEventListener("click", function(){
    secondsLeft -= 3;
    question3.style.display = "none";
    spock.style.display = "none";
    nope3.style.display = "none";
    nope32.style.display = "none";
    nope34.style.display = "none";
    nopetext34.style.display = "block";
});


nopetext34.addEventListener("click", function(){
    question3.style.display = "block";
    spock.style.display = "block";
    nope3.style.display = "block";
    nope32.style.display = "block";
    nope34.style.display = "block";
    timeLeft.style.display = "block";
    nopetext34.style.display = "none";
});

spock.addEventListener("click", function(){
    text3.style.display = "block";
    keepgoing3.style.display = "block";
    question3.style.display = "none";
    spock.style.display = "none";
    nope3.style.display = "none";
    nope32.style.display = "none";
    nope34.style.display = "none";  
    console.log(spock);
});

keepgoing3.addEventListener("click", function(){
    text3.style.display = "none";
    keepgoing3.style.display = "none";
    question4.style.display = "block";
    gotit.style.display = "block";
});

gotit.addEventListener("click", function (){
    gotit.style.display = "none";
    thisanswer.style.display = "block";
    nope4.style.display = "block";
    nope42.style.display = "block";
    nope43.style.display = "block";
    nope44.style.display = "block";
})

nope4.addEventListener("click", function(){
    secondsLeft -= 3;
    question4.style.display = "none";
    thisanswer.style.display = "none";
    nope4.style.display = "none";
    nope42.style.display = "none";
    nope43.style.display = "none";
    nope44.style.display = "none";
    nopetext4.style.display = "block";
});

nopetext4.addEventListener("click", function(){
    question4.style.display = "block";
    thisanswer.style.display = "block";
    nope4.style.display = "block";
    nope42.style.display = "block";
    nope43.style.display = "block";
    nope44.style.display = "block";
    timeLeft.style.display = "block";
    nopetext4.style.display = "none";
});

nope42.addEventListener("click", function(){
    secondsLeft -= 3;
    question4.style.display = "none";
    thisanswer.style.display = "none";
    nope4.style.display = "none";
    nope42.style.display = "none";
    nope43.style.display = "none";
    nope44.style.display = "none";
    nopetext42.style.display = "block";
});

nopetext42.addEventListener("click", function(){
    question4.style.display = "block";
    thisanswer.style.display = "block";
    nope4.style.display = "block";
    nope42.style.display = "block";
    nope43.style.display = "block";
    nope44.style.display = "block";
    timeLeft.style.display = "block";
    nopetext42.style.display = "none";
});

nope43.addEventListener("click", function(){
    secondsLeft -= 3;
    question4.style.display = "none";
    thisanswer.style.display = "none";
    nope4.style.display = "none";
    nope42.style.display = "none";
    nope43.style.display = "none";
    nope44.style.display = "none";
    nopetext43.style.display = "block";
});

nopetext43.addEventListener("click", function(){
    question4.style.display = "block";
    thisanswer.style.display = "block";
    nope4.style.display = "block";
    nope42.style.display = "block";
    nope43.style.display = "block";
    nope44.style.display = "block";
    timeLeft.style.display = "block";
    nopetext43.style.display = "none";
});

nope44.addEventListener("click", function(){
    secondsLeft -= 3;
    question4.style.display = "none";
    thisanswer.style.display = "none";
    nope4.style.display = "none";
    nope42.style.display = "none";
    nope43.style.display = "none";
    nope44.style.display = "none";
    nopetext44.style.display = "block";
});

nopetext44.addEventListener("click", function(){
    question4.style.display = "block";
    thisanswer.style.display = "block";
    nope4.style.display = "block";
    nope42.style.display = "block";
    nope43.style.display = "block";
    nope44.style.display = "block";
    timeLeft.style.display = "block";
    nopetext44.style.display = "none";
});

thisanswer.addEventListener("click", function(){
    wins ++;
    wincount.textContent = ("WINS: " + wins);
    losscount.textContent = ("LOSSES: " + losses);
    wincount.style.display = "block";
    losscount.style.display = "block";
    text4.style.display = "block";
    question4.style.display = "none";
    thisanswer.style.display = "none";
    nope4.style.display = "none";
    nope42.style.display = "none";
    nope43.style.display = "none";
    nope44.style.display = "none";
    timeLeft.style.display = "none";
    playagain.style.display = "block";
    form.style.display = "block";
    p.style.display = "block";
    console.log(wins);
});

playagain.addEventListener("click", function(){
    window.location.reload()
});

tryagain.addEventListener("click", function(){
    window.location.reload()
});

no.addEventListener("click", function(){
    alert("Please play, it took a long time to do this")
});

function storedItems(){
    localStorage.setItem('losses', losses);
    localStorage.setItem('wins', wins);
};

storedItems();

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeLeft.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      losttext.style.display = "block";
      timer.style.display = "none";
      losses++;
      console.log(losses);
      wincount.textContent = ("WINS: " + wins);
      losscount.textContent = ("LOSSES: " + losses);
      wincount.style.display = "block";
      losscount.style.display = "block";
      mainEl.style.display = "none";
      tryagain.style.display = "block";
    }
  },1000);
}

setTime(); 