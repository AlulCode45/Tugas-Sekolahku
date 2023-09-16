let lampuHijau = document.getElementById('lampu-hijau');
let lampuKuning = document.getElementById('lampu-kuning');
let lampuMerah = document.getElementById('lampu-merah');

var i = 0

function nyalakanLampu() {
    if (i == 3) {
        i = 0
    }
    i++
    turnOnlamp(i)
}

function turnOnlamp(i) {
    if (i == 1) {
        lampuHijau.style.opacity = '100%'
        lampuKuning.style.opacity = '35%'
        lampuMerah.style.opacity = '35%'
    } else if (i == 2) {
        lampuHijau.style.opacity = '35%'
        lampuKuning.style.opacity = '100%'
        lampuMerah.style.opacity = '35%'
    } else if (i == 3) {
        lampuHijau.style.opacity = '35%'
        lampuKuning.style.opacity = '35%'
        lampuMerah.style.opacity = '100%'
    }
}



document.getElementById('kecepatan').addEventListener('change', function () {
    console.log("Kecepatan diganti : " + this.value)

    setInterval(() => {
        nyalakanLampu()
    }, this.value)

})