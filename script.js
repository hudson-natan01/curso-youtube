let numer = 0
let seconds = 0
let minutes = 0
let hours = 0
let corn 

const milesegundos = document.querySelector(".mileseconds")
const segundos = document.querySelector(".seconds")
const minutos = document.querySelector(".minutes")
const horas = document.querySelector(".hours")
const startbutton = document.querySelector(".start")
const stopbutton = document.querySelector(".stop")
const resetbutton = document.querySelector(".reset")

function start(){

    corn = setInterval(() => {

        numer++
        milesegundos.innerHTML = numer

        if(numer == 100){

            numer = 0

            seconds++

            segundos.innerHTML = seconds
        }

        if(seconds == 60){

            seconds = 0

            minutes++

            minutos.innerHTML = minutes
        }

       if(minutes == 60){

        minutes = 0

        hours++

        horas.innerHTML = hours
        minutos.innerHTML = minutes
       }

        
    }, 10);
  
}

function stop(){
   clearInterval(corn)
}

function reset(){

    numer = 0
    milesegundos.innerHTML = numer + "00" 

    seconds = 0
    segundos.innerHTML = seconds

    minutes = 0
    minutos.innerHTML = minutes

    hours = 0
    horas.innerHTML = hours

    clearInterval(corn)

}



startbutton.addEventListener("click",start)
stopbutton.addEventListener("click", stop)
resetbutton.addEventListener("click", reset)