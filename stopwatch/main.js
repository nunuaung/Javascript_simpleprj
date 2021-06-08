const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const milisecondsTag = document.getElementsByClassName("milisecondsTag")[0];
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const continueBtn = document.getElementById("continue");
const restartBtn = document.getElementById("restart");

let seconds = 0, minutes = 0, hours =0, ms = 0;

const startTime = ()=>{
    // setInterval(callback,delay)
    // console.log("Start here....");
    ms +=1;
    if( ms === 1000){
        ms = 0;
        seconds +=1;
        if( seconds === 60 ){
            seconds = 0;
            minutes +=1;
            if( minutes === 60 ){
                minutes = 0;
                hours +=1;
            }
        }
    }
       
    
    // condition ? true : false
    const secondsText = seconds < 10 ? "0"+seconds.toString() : seconds;
    const minutesText = minutes < 10 ? "0"+minutes.toString() : minutes;
    const hoursText = hours < 10 ? "0"+hours.toString() : hours;
    stopWatchTag.textContent = hoursText + ":" + minutesText + ":" + secondsText;
    milisecondsTag.textContent = ms;
}
// setInterval(startTime,1000);  //start time
let intervalId;

startBtn.addEventListener("click", () => {
    intervalId = setInterval(startTime, 1); //for every milliseconds
    // intervalId = setInterval(startTime, 1000); for every seconds
});
pauseBtn.addEventListener("click", () => {
    clearInterval(intervalId);
});
continueBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = setInterval(startTime, 1);
    // intervalId = setInterval(startTime, 1000);
});
restartBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    seconds = 0, minutes = 0, hours = 0 , ms = 0;
    intervalId = setInterval(startTime, 1);
    // intervalId = setInterval(startTime, 1000);
});