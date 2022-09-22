let tens = 00;
let Seconds = 00;
let outputTens = document.getElementById('tens');
let outputSeconds = document.getElementById('seconds');
let buttonStart = document.getElementById('button-start');
let buttonStop = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');
let interval ; 

buttonStart.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTime);
});

buttonStop.addEventListener('click', () => {
    clearInterval(interval);
});

buttonReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = "00";
    Seconds = "00";
    outputTens.innerHTML = Seconds ;
    outputSeconds.innerHTML = tens ;
});

//function start

function startTime(){
    tens++ ;
    if(tens <= 9){
        outputTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        outputTens.innerHTML = tens;
    }

    if(tens > 99){
        Seconds++ ;
        outputSeconds.innerHTML = "0" + Seconds;
        tens = 0 ;
        outputTens.innerHTML = "0" + tens;
    }

    if(Seconds > 0){
        outputSeconds.innerHTML = Seconds;
    }
}