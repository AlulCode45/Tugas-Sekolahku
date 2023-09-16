const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const resetBtn = document.getElementById('reset')

let hourHtml = document.getElementById('hour')
let minHtml = document.getElementById('min')
let secHtml = document.getElementById('sec')
let milsHtml = document.getElementById('milsec')

let hour = 00
let min = 00
let sec = 00
let milsec = 00



function startStopwatch() {
    if (timer) {
        milsec++

        if (milsec == 100) {
            sec++
            milsec = 0
        }

        if (sec == 60) {
            min++
            sec = 0
        }
        if (min == 60) {
            hour++
            min = 0
            sec = 0
        }


        let hrString = hour;
        let minString = min;
        let secString = sec;
        let milsString = milsec;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (min < 10) {
            minString = "0" + minString;
        }

        if (sec < 10) {
            secString = "0" + secString;
        }

        if (milsec < 10) {
            milsString = "0" + milsString;
        }

        hourHtml.innerHTML = hrString
        minHtml.innerHTML = minString
        secHtml.innerHTML = secString
        milsHtml.innerHTML = milsString

        setTimeout(startStopwatch, 10);
    }
}

startBtn.addEventListener('click', function () {
    timer = true
    startStopwatch()
})

stopBtn.addEventListener('click', function () {
    timer = false
})

resetBtn.addEventListener('click', function () {
    timer = false

    hour = 0
    min = 0
    sec = 0
    milsec = 0

    hourHtml.innerHTML = '00'
    minHtml.innerHTML = '00'
    secHtml.innerHTML = '00'
    milsHtml.innerHTML = '00'
})
