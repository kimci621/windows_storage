const timer = (importDeadline, Timerselector) => {
  const deadline = importDeadline;

  function calcTime(importDate = deadline) {
    const reduceTime = Date.parse(importDate) - Date.parse(new Date());
    const seconds = Math.floor(reduceTime / 1000 % 60),
      minutes = Math.floor(reduceTime / 1000 / 60 % 60),
      hours = Math.floor(reduceTime / 1000 / 60 / 60 % 24),
      days = Math.floor(reduceTime / 1000 / 60 / 60 / 24);

    return {
      'reduceTime': reduceTime,
      'seconds': seconds,
      'minutes': minutes,
      'hours': hours,
      'days': days,
    };
  }

  function addZero(time) {
    if (time < 9) {
      return '0' + time;
    } else {
      return time;
    }
  }

  function addTimeOnPage(selector) {
    const parentSelector = document.querySelector(selector),
      days = parentSelector.querySelector('#days'),
      hours = parentSelector.querySelector('#hours'),
      minutes = parentSelector.querySelector('#minutes'),
      seconds = parentSelector.querySelector('#seconds');
    let reduce = calcTime().reduceTime;

    const refreshTimer = setInterval(exportToDom, 1000);

    function exportToDom() {
      days.textContent = addZero(calcTime().days);
      hours.textContent = addZero(calcTime().hours);
      minutes.textContent = addZero(calcTime().minutes);
      seconds.textContent = addZero(calcTime().seconds);
      
      if (reduce <= 0) {
        clearInterval(refreshTimer);
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }

  addTimeOnPage(Timerselector);
};

export default timer;