const $start = document.getElementById("iniciar");
const $pause = document.getElementById("pausar");
const $clear = document.getElementById("zerar")

const $inputHours = document.getElementById("input-hours");
const $inputMinutes = document.getElementById("input-minutes");
const $inputSeconds = document.getElementById("input-seconds");

let clicks = 0;
let statusTimer = "off"
let idSetInterval;
let currentAtuais;

const checkEmptyBox = (hours, minutes, seconds) => {
    let times = [hours, minutes, seconds]
    const timesFormat = times.map(value =>{ 
        if (value.length === 0||isNaN(value)) return "0"
          return value
        })
    return timesFormat;
}
const calculateSeconds = value => {
    const hours = Number(value[0]);
    const minutes = Number(value[1]);
    const seconds = Number(value[2]);
    const totalSeconds = (hours * 60 + minutes) * 60 + seconds;
    return totalSeconds;
}
const renderTimer = seconds => {
    const addZeroLeft = time => time < 10 ? "0" + time : time;

    let timer = seconds, hour, minute, second;

    idSetInterval = setInterval(() => {

        hour = parseInt(timer / 60 / 60);
        minute = addZeroLeft(parseInt(timer / 60) % 60);
        second = addZeroLeft(timer % 60);

        $inputHours.value = hour;
        $inputMinutes.value = minute;
        $inputSeconds.value = second;

        if (--timer < 0) {
            timer = seconds
        }
        currentAtuais = timer
    }, 1000)
}
$start.addEventListener("click", () => {
    const inputHours = $inputHours.value;
    const inputMinutes = $inputMinutes.value;
    const inputSeconds = $inputSeconds.value;
    
    const inputsChecked = checkEmptyBox(inputHours, inputMinutes, inputSeconds);

    const allAreZeros = () => { 
        if (inputsChecked[0] === "0" && inputsChecked[1] === "0" && inputsChecked[2] === "0")
            return true
    }
    if(!allAreZeros()){clicks++}
    
    if (clicks === 1 && !allAreZeros()) {      
        const seconds = calculateSeconds(inputsChecked);
        renderTimer(seconds)
        statusTimer = "on"
    }
    if (statusTimer === "paused") {
        renderTimer(currentAtuais)  
        statusTimer = "on"     
    }
})
$pause.addEventListener("click", () => {
  if(statusTimer === "on")
    statusTimer = "paused"
    clearInterval(idSetInterval)
})
$clear.addEventListener("click", () => {
    clicks = 0;
    clearInterval(idSetInterval);
    $inputHours.value = ''
    $inputMinutes.value = ''
    $inputSeconds.value = ''
    $inputHours.focus()
})