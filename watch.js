function display(){
    let d = new Date();
    let hour = d.getHours();
    if (hour>=12){
        document.getElementById("ampara").innerHTML = "PM"
    }
    else{
        document.getElementById("ampara").innerHTML = "AM"
    }
    if (hour>12){
        hour = hour - 12;
    }
    document.getElementById("currtimepara").innerHTML=
    hour + ":" +
    d.getMinutes() + ":" +
    d.getSeconds();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("datepara").innerHTML =  days[d.getDay()] + " ,  " + d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear()

}

setInterval(display, 1000);

            // stopwatch

let [h,m,s] = [0,0,0];

let content = document.getElementById('content');
let stcontent = document.getElementById('stcontent');
let timercontent = document.getElementById("timercontent")

let start = document.getElementById('start');
let pause = document.getElementById('pause');
let restart = document.getElementById('restart');
let timerpara = document.getElementById('timerpara');
let running = false;
let paused = false;
let timer = null;

function startTimer(){
    
    s++;
    if (s==60){
        m++
        s = 0
        if (m==60){
            h++
            m = 0
        }
    }

    timerpara.innerHTML = h + ' : ' + m +' : ' + s;
}

start.onclick = function(){
    if (running==false){
        timer = setInterval(startTimer, 1000);
        running = true
    }
    if(paused==true){
        timer = setInterval(startTimer, 1000);
        paused = false;
    }
}

pause.onclick = function(){
    if (running==true){
        clearInterval(timer);
        paused = true;
    }
}

restart.onclick = function(){
    clearInterval(timer)
    running = false;
    paused = false;
    timer = null;
    [h,m,s] = [0,0,0];
    timerpara.innerHTML = '00' + ' : ' + '00' + " : " + '00';
}

let watchbutton = document.getElementById("watchbutton");
let stopwatchbutton = document.getElementById("stopwatchbutton");
let timerbutton = document.getElementById("timerbutton");

let watchicon = document.getElementById("watchicon")
let stopwatchicon = document.getElementById("stopwatchicon")
let timericon = document.getElementById("timericon")

watchbutton.onclick = function(){
    content.style.display = "flex"
    watchbutton.style.backgroundColor = "rgb(6, 6, 220)"
    
    stcontent.style.display = "none"
    stopwatchbutton.style.backgroundColor = "aliceblue"

    timercontent.style.display = "none"
    timerbutton.style.backgroundColor = "aliceblue"

}

stopwatchbutton.onclick = function(){
    content.style.display = "none"
    watchbutton.style.backgroundColor = "aliceblue"
    
    stcontent.style.display = "flex"
    stopwatchbutton.style.backgroundColor = "rgb(6, 6, 220)"

    timercontent.style.display = "none"
    timerbutton.style.backgroundColor = "aliceblue"
}

timerbutton.onclick = function(){
    content.style.display = "none"
    watchbutton.style.backgroundColor = "aliceblue"
    
    stcontent.style.display = "none"
    stopwatchbutton.style.backgroundColor = "aliceblue"

    timercontent.style.display = "flex"
    timerbutton.style.backgroundColor = "rgb(6, 6, 220)"
}

let hourselect = document.getElementById("hourselect")
let secondselect = document.getElementById("secondselect")
let minutsselect = document.getElementById("minutsselect")

for(let i=0 ;i<24 ; i++){
    let temp = document.createElement("option");
    temp.value = i
    temp.innerHTML = i
    hourselect.append(temp)
}

for(let i=0 ;i<60 ; i++){
    let temp = document.createElement("option");
    temp.value = i
    temp.innerHTML = i
    secondselect.append(temp)
}

for(let i=0 ;i<60 ; i++){
    let temp = document.createElement("option");
    temp.value = i
    temp.innerHTML = i
    minutsselect.append(temp)
}

let cancletimer = document.getElementsByClassName("cancletimer");
let pausetimer = document.getElementsByClassName("pausetimer");
let timeleftpara = document.getElementById("timeleftpara");
let timeleft = null;
let timerrunning = false;

let [hour,minuts,seconds] = [hourselect.value,minutsselect.value,secondselect.value]

function changetimevalue(){
    [hour,minuts,seconds] = [hourselect.value,minutsselect.value,secondselect.value]
    
}

hourselect.addEventListener("change",()=>{
    changetimevalue()
})

minutsselect.addEventListener("change",()=>{
    changetimevalue()
})
secondselect.addEventListener("change",()=>{
    changetimevalue()
})

function changetime(){
    seconds--;
    if (seconds < 0){
        if(minuts>0){
            minuts--
            seconds = 59}
        if (minuts == 0){
            if(hour>0){
                hour--
                minuts = 59
                seconds = 59
            }
            
        }
    }
    timeleftpara.innerHTML = hour + ' : ' + minuts +' : ' + seconds;
    if(hour==0 && minuts==0 && seconds<=0){
        timerend()
        window.alert("Timer Ended")
    }
}

pausetimer[0].onclick = function(){
    if(timerrunning==false){
        timeleft = setInterval(changetime,1000)
        timerrunning = true
    }
    else if(timerrunning == true){
        clearInterval(timeleft)
        timerrunning = false
    }
}
function timerend(){
    clearInterval(timeleft)
    timerrunning = false
    timeleft = null
    changetimevalue()
    timeleftpara.innerHTML = "00:00:00"
}

cancletimer[0].onclick = function(){
    timerend()
}