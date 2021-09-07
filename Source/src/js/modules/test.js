function calcTime(importDate) {
  const reduceTime = (Date.parse(importDate) - Date.parse(new Date()));
  const seconds = Math.round(reduceTime / 1000 % 60),
    minutes = Math.round(reduceTime / 1000 / 60 % 60),
    hours = Math.round(reduceTime / 1000 / 60 / 60 % 24),
    days = Math.round(reduceTime / 1000 / 60 / 60 / 24);

  return {
    'reduceTime': reduceTime,
    'seconds': seconds,
    'minutes': minutes,
    'hours': hours,
    'days': days,
  };
}

function addZero(time) {
  if (time.length < 9) {
    return '0' + time;
  } else {
    return time;
  }
}

/*
есть отдельные блоки с временами
есть блок с валидацией добавления нуля
нужно взять селекторы, куда подмещать наши таймеры
нужно каждую секунду добавлять таймеры в селекторы
если таймеры будут 0, то перестать добавлять и сделать значения 00
*/
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

  days.textContent = addZero(calcTime().days);
  hours.textContent = addZero(calcTime().hours);
  minutes.textContent = addZero(calcTime().minutes);
  seconds.textContent = addZero(calcTime().seconds);

  const refreshTimer = setInterval(addTimeOnPage(), 1000);
  
  checkZerro(days, refreshTimer);
  checkZerro(hours, refreshTimer);
  checkZerro(minutes, refreshTimer);
  checkZerro(seconds, refreshTimer);
}