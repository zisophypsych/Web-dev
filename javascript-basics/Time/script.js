const count = document.getElementById('count');
const start = document.getElementById('start');
const stopButton = document.getElementById('stop');

function showTime(){
    const d = new Date;
    currentTime = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    count.innerText = currentTime;
}

interval = setInterval(showTime, 1000);

stopButton.addEventListener('click', () => {
    clearInterval(interval);
})

