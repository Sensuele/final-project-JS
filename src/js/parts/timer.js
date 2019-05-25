let timer = () => {
  let deadline = '2019-05-29 ';

  let getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor((t/1000/60) % 60),
    hours = Math.floor((t/(1000*60*60) % 24)),
    days = Math.floor((t / (1000 * 60 * 60 * 24)));

    return {
      'total' : t,
      'days' : days,
      'hours' : hours,
      'minutes' : minutes,
      'seconds' : seconds
    };
  };

  let setClock = (id, endtime) => {
    let timer = document.getElementById(id),
        days = timer.querySelector("#days"),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);
    
    function updateClock() {
      let t = getTimeRemaining(endtime);
      days.textContent = t.days;
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      // подставляем 0 перед значениями, которые состоят из одной цифры
      if (days.textContent < 10){
        days.textContent = '0' + t.days;
      }
      if (hours.textContent < 10){
      hours.textContent = '0' + t.hours;
      }
      if (minutes.textContent < 10){
        minutes.textContent = '0' + t.minutes;
      }
      if (seconds.textContent < 10){
        seconds.textContent = '0' + t.seconds;
      }  
      // если дата уже прошла выводится: 00:00:00 
      if (t.total <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        clearInterval(timeInterval);
      } 
    }     
  };
  setClock('timer', deadline);
};

module.exports = timer;