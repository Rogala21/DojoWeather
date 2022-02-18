    var highTemps = document.querySelectorAll('.high')
    var lowTemps = document.querySelectorAll('.low')

function burbank() {
    alert("Loading weather report...")
}

function chicago() {
    alert("Loading weather report...")
}

function dallas() {
    alert("Loading weather report...")
}

function accept(element) {
    element.parentNode.remove()
}

function degrees(element) {
    console.log(element.value)
    if (element.value == 'C') {
        for (i = 0; i < highTemps.length; i ++ ) {
            var highTemp = document.querySelectorAll('.high')[i].innerHTML
            highTemp = Math.round((highTemp - 32) * 5/9)
            document.querySelectorAll('.high')[i].innerHTML = highTemp
            console.log(highTemp)
            console.log(i)
        }
        for (i = 0; i < lowTemps.length; i ++ ) {
            var lowTemp = document.querySelectorAll('.low')[i].innerHTML
            lowTemp = Math.round((lowTemp - 32) * 5/9)
            document.querySelectorAll('.low')[i].innerHTML = lowTemp
            console.log(lowTemp)
            console.log(i)
        }
    }
    if (element.value == 'F') { 
        for (i = 0; i < highTemps.length; i ++ ) {
            var highTemp = document.querySelectorAll('.high')[i].innerHTML
            highTemp = Math.round(highTemp * 9/5 + 32)
            document.querySelectorAll('.high')[i].innerHTML = highTemp
            console.log(highTemp)
            console.log(i)
        }
        for (i = 0; i < lowTemps.length; i ++ ) {
            var lowTemp = document.querySelectorAll('.low')[i].innerHTML
            lowTemp = Math.round(lowTemp * 9/5 + 32)
            document.querySelectorAll('.low')[i].innerHTML = lowTemp
            console.log(lowTemp)
            console.log(i)
        }
    }
}
