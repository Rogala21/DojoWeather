    var highTemps = document.querySelectorAll('.high')
    var lowTemps = document.querySelectorAll('.low')
    var currentCity = document.querySelector('.location-selected')
    var currentTemp = document.querySelector('.currentTemp')
    var burbankCity = document.querySelector('.city-list-burbank')
    var chicagoCity = document.querySelector('.city-list-chicago')
    var dallasCity = document.querySelector('.city-list-dallas')
    var sanJoseCity = document.querySelector('.city-list-sanJose')

function burbank(element) {
    alert("Loading weather report...")
    currentCity.innerText = 'Burbank'
    for (i = 0; i < highTemps.length; i ++ ) {
        highTemp = [24,25,20,17]
        console.log(highTemp[i])
        document.querySelectorAll('.high')[i].innerHTML = highTemp[i]
        console.log(highTemp)
        console.log(i)
    }
    console.log('low temp')
    for (i = 0; i < lowTemps.length; i ++ ) {
        lowTemp = [10,9,11,8]
        console.log(highTemp[i])
        document.querySelectorAll('.low')[i].innerHTML = lowTemp[i]
        console.log(lowTemp)
        console.log(i)
    }
    currentTemp.value = 'C'
    burbankCity.style.color = 'transparent'
    burbankCity.style.border = '3px solid transparent'
    chicagoCity.style.color = 'white'
    chicagoCity.style.border = '3px solid black'
    dallasCity.style.color = 'white'
    dallasCity.style.border = '3px solid black'
    sanJoseCity.style.color = 'white'
    sanJoseCity.style.border = '3px solid black'
}

function chicago(element) {
    alert("Loading weather report...")
    currentCity.innerText = 'Chicago'
    for (i = 0; i < highTemps.length; i ++ ) {
        highTemp = [-1,-6,8,3]
        console.log(highTemp[i])
        document.querySelectorAll('.high')[i].innerHTML = highTemp[i]
        console.log(highTemp)
        console.log(i)
    }
    console.log('low temp')
    for (i = 0; i < lowTemps.length; i ++ ) {
        lowTemp = [-12,-8,1,1]
        console.log(highTemp[i])
        document.querySelectorAll('.low')[i].innerHTML = lowTemp[i]
        console.log(lowTemp)
        console.log(i)
    }
    currentTemp.value = 'C'
    burbankCity.style.color = 'white'
    burbankCity.style.border = '3px solid black'
    chicagoCity.style.color = 'transparent'
    chicagoCity.style.border = '3px solid transparent'
    dallasCity.style.color = 'white'
    dallasCity.style.border = '3px solid black'
    sanJoseCity.style.color = 'white'
    sanJoseCity.style.border = '3px solid black'
}

function dallas(element) {
    alert("Loading weather report...")
    currentCity.innerText = 'Dallas'
    for (i = 0; i < highTemps.length; i ++ ) {
        highTemp = [12,18,21,27]
        console.log(highTemp[i])
        document.querySelectorAll('.high')[i].innerHTML = highTemp[i]
        console.log(highTemp)
        console.log(i)
    }
    console.log('low temp')
    for (i = 0; i < lowTemps.length; i ++ ) {
        lowTemp = [-1,4,15,17]
        console.log(highTemp[i])
        document.querySelectorAll('.low')[i].innerHTML = lowTemp[i]
        console.log(lowTemp)
        console.log(i)
    }
    currentTemp.value = 'C'
    burbankCity.style.color = 'white'
    burbankCity.style.border = '3px solid black'
    chicagoCity.style.color = 'white'
    chicagoCity.style.border = '3px solid black'
    dallasCity.style.color = 'transparent'
    dallasCity.style.border = '3px solid transparent'
    sanJoseCity.style.color = 'white'
    sanJoseCity.style.border = '3px solid black'
}

function sanJose(element) {
    alert("Loading weather report...")
    currentCity.innerText = 'San Jose'
    for (i = 0; i < highTemps.length; i ++ ) {
        highTemp = [24,27,21,26]
        console.log(highTemp[i])
        document.querySelectorAll('.high')[i].innerHTML = highTemp[i]
        console.log(highTemp)
        console.log(i)
    }
    console.log('low temp')
    for (i = 0; i < lowTemps.length; i ++ ) {
        lowTemp = [18,19,16,21]
        console.log(highTemp[i])
        document.querySelectorAll('.low')[i].innerHTML = lowTemp[i]
        console.log(lowTemp)
        console.log(i)
    }
    currentTemp.value = 'C'
    burbankCity.style.color = 'white'
    burbankCity.style.border = '3px solid black'
    chicagoCity.style.color = 'white'
    chicagoCity.style.border = '3px solid black'
    dallasCity.style.color = 'white'
    dallasCity.style.border = '3px solid black'
    sanJoseCity.style.color = 'transparent'
    sanJoseCity.style.border = '3px solid transparent'
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
