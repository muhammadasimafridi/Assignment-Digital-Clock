let clock = document.querySelector(".clock");

function timeFunc() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let period = "AM";

    if(hours >= 12) {
        period = "PM";
    }

    if(hours === 0) {
        hours = 12;
    }

    if(hours < 10) {
        hours = "0" + hours;
    }
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    if(seconds < 10) {
        seconds = "0" + seconds;
    }


    if(hours > 12) {
        hours = hours - 12;
    }

    let time = `${hours}:${minutes}:${seconds} ${period}`

    clock.innerText = time;
}

setInterval(timeFunc, 1000);

timeFunc();