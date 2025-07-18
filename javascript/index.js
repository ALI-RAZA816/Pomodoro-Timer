let timer = document.getElementById('timer');
let startbtn = document.getElementById('start');
let stopbtn = document.getElementById('stop');
let resetbtn = document.getElementById('reset');
let timeleft = 1500;
let interval;


function main(){
    timeleft--;
    let min = Math.floor(timeleft / 60);
    let sec = timeleft % 60;
    timer.innerHTML = `${min}:${sec}`;
    if(sec == 0){
        clearInterval(interval);
        timeleft = 1500;
        timer.innerHTML = `${min}:0${sec}`;
    }
    if(sec < 10 && min < 10){
        timer.innerHTML = `0${min}:0${sec}`;
    }
}

startbtn.addEventListener('click',()=>{
    interval = setInterval(()=>{
        main();
    },1000);
});

stopbtn.addEventListener('click',()=>{
    clearInterval(interval);
});

resetbtn.addEventListener('click',()=>{
    clearInterval(interval);
    timeleft = 1500;
    main()
});
