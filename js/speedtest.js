const testArea = document.querySelector("#speedtest");
const text = document.querySelector(".sec3-texta p").innerHTML;
const resetBtn = document.querySelector(".sec3-btn button");
const theTimer = document.querySelector(".sec3-btn div");
var result = document.querySelector(".sec3-btn .result");
console.log(text);

var timer = [0, 0, 0, 0];
var intervall;
var corentTime;
var timerRunning = false;

function leadingZero(time) {
  if (time <= 9) {
    time = "0" + time;
  }
  return time;
}

function runTimer() {
  corentTime =
    leadingZero(timer[0]) +
    ":" +
    leadingZero(timer[1]) +
    ":" +
    leadingZero(timer[2]);
  theTimer.innerHTML = corentTime;
  timer[3]++;

  timer[0] = Math.floor(timer[3] / 100 / 60);
  timer[1] = Math.floor(timer[3] / 100 - timer[0] * 60);
  timer[2] = Math.floor(timer[3] - timer[1] * 100 - timer[0] * 6000);
}

function reset() {
  timer = [0,0,0,0];  
  console.log("cliked");
  clearInterval(intervall);
  intervall = null;
  timerRunning = false;
  testArea.value = "";
  theTimer.innerHTML = "00:00:00";
  result.innerHTML = "";
}



function spellCheck() {
  let textEntetred = testArea.value;
  let textMatch = text.slice(0, textEntetred.length);
  if (textEntetred == text) {
    clearInterval(intervall);
    testArea.style = "color: white;";
  } else if (textEntetred == textMatch) {
    testArea.style = "color: white;";
  } else {
    testArea.style = "color: red;";
  }
}

function score(){
    if(timer[0] <= 2){
        result.innerHTML = "Congrats! Super Fast Typing!"
    }else if(timer[0] <=2 && timer[0] >=2){
        result.innerHTML = "Good But can be Better!"
    }else{
        result.innerHTML = "You need more exercises!"
    }
}



function start() {
  let textEnteredLength = testArea.value.length;
  if (textEnteredLength === 0 && !timerRunning) {
    timerRunning = true;
    intervall = setInterval(runTimer, 10);
  }
}

testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetBtn.addEventListener("click", reset, false);
