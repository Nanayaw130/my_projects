const christmasEve = ('December 26 2022 13:33');
const dayEl = document.getElementById('days');
const hourEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secEl = document.getElementById('sec');
var endDay = document.querySelector('.countdown-container');

const countdown = ()=> {
    //get today's date
    const nowDate = new Date();
    //the countdown date
    var christmasDate=new Date(christmasEve);
    //the difference between the countdown date and now(in seconds)
    var diff= new Date(christmasDate-nowDate);
   
    //calculations per day,hour,minutes and seconds
    var days=Math.floor(diff/(1000*3600*24));
    var hours = Math.floor((diff%(1000 * 3600* 24))/(1000 * 3600));
    var minutes = Math.floor((diff % (1000 * 3600)) / (1000 * 60));
    var sec = Math.floor((diff % (1000 * 60)) / 1000);
   
    dayEl.innerHTML = days;
    minsEl.innerHTML =minutes;
    hourEl.innerHTML =hours;
    secEl.innerHTML =sec;
    
    if (diff < 0) {
        clearInterval(countdown);
       endDay.innerHTML='THE END'
       endDay.style.fontSize =" 2rem";
       
    }
   
}
countdown();
setInterval(countdown,1000);

