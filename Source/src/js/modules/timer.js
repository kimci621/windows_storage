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

  function checkZerro(time, interval) {
    if (time == '00') {
      clearInterval(interval);
    }
  }

  function addTimeOnPage(selector) {
    const parentSelector = document.querySelector(selector),
      days = parentSelector.querySelector('#days'),
      hours = parentSelector.querySelector('#hours'),
      minutes = parentSelector.querySelector('#minutes'),
      seconds = parentSelector.querySelector('#seconds');

    const refreshTimer = setInterval(exportToDom, 1000);

    function exportToDom() {
      days.textContent = addZero(calcTime().days);
      hours.textContent = addZero(calcTime().hours);
      minutes.textContent = addZero(calcTime().minutes);
      seconds.textContent = addZero(calcTime().seconds);

      checkZerro(days, refreshTimer);
      checkZerro(hours, refreshTimer);
      checkZerro(minutes, refreshTimer);
      checkZerro(seconds, refreshTimer);
    }
  }

  addTimeOnPage(Timerselector);
};

export default timer;