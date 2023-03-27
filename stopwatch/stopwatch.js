let Interval;
const startBtn = document.getElementById("start-btn");
const secondsElement = document.getElementById("seconds");
const msElement = document.getElementById("ms");
const resetBtn = document.getElementById("reset-btn");
const minElement = document.getElementById("minutes");
const hourElement = document.getElementById("hour");
const stopBtn = document.getElementById("stop-btn");
let second = 0;
let ms = 0;
let min = 0;
let hour = 0;

startBtn.addEventListener("click", function () {
    Interval = setInterval(startTimer, 10)
})



function startTimer() {
    ms++;
    
    if(ms < 10){
        msElement.innerText = `0${ms}`;
    }else{
        msElement.innerText = ms;
    }
    if (ms == 100) {
        ms = 0;
        second++;
    } else if (second < 10) {
        secondsElement.textContent = `0${second}`;
    } else {
        secondsElement.textContent = second;
    }
    if (second == 60) {
        second = 0;
        min++;
        minElement.textContent = `0${min}`;
    } else if (min > 9) {
        minElement.textContent = min;
    }
}

resetBtn.addEventListener("click", function () {
    second = 0;
    ms = 0;
    min = 0;
    hour = 0;
    clearInterval(Interval);
    msElement.textContent = "00";
    secondsElement.textContent = "00";
    minElement.textContent = "00";
    hourElement.textContent = "00";
})

stopBtn.addEventListener("click",function(){
clearInterval(Interval);
})




