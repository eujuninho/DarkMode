// modo escuro

const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function() {
	$html.classList.toggle('dark-mode')
})

// hora do site

function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();


    if(hour < 10) hour = '0' + hour;
    if(minute < 10) minute = '0' + minute;
    if(second < 10) second = '0' + second;


    let tempo = `${hour} : ${minute} : ${second}`
    document.getElementById('timer').innerHTML = tempo;
}


function iniTime(){
    setInterval(showTime, 1000);
}
