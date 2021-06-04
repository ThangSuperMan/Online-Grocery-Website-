let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector(".navbar");

menu.addEventListener('click', ()=> {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let countDate = new Date('june 6, 2021 00:00:00').getTime();

function CountDown() {
    let now = new Date().getTime();
    let gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let textDay = Math.floor(gap / (day));
    let textHour = Math.floor((gap % (day)) / hour);
    let textMinute = Math.floor((gap % (hour)) / minute);
    let textSecond = Math.floor((gap % (minute)) / second);

    document.getElementById('day').innerText = textDay;
    document.getElementById('hour').innerText = textHour;
    document.getElementById('minute').innerText = textMinute;
    document.getElementById('second').innerText = textSecond;
}

// this method will call the function every 1000 miliseconds
setInterval(CountDown, 1000);