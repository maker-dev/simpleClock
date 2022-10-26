let allNumberElement = document.querySelectorAll(".clock div");
let startClock = document.getElementById("startClock");
let pauseClock = document.getElementById("pauseClock");
var redCounter = 0;
var blueCounter = 11;
var stopInterval; 

let removeAllClasses = () => {
    allNumberElement.forEach(item => {
        item.setAttribute("class","");
    })
}

let clockWorking = () => {
    stopInterval = setInterval(function () {
        removeAllClasses();
        allNumberElement[redCounter].classList.add("redActive");
        allNumberElement[blueCounter].classList.add("blueActive");
        redCounter += 1;
        if (redCounter === 12) {
            redCounter = 0;
            blueCounter += 1;
        }
        if (blueCounter === 12) {
            blueCounter = 0;
        }
    },1000)
}

let clockStop = () => {
    clearInterval(stopInterval);
}

startClock.addEventListener("click",clockWorking); 

pauseClock.addEventListener("click",clockStop);

