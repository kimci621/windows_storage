const windowWidth = document.querySelector('#width');
  const windowHeight = document.querySelector('#height');
  windowWidth.addEventListener('input', () => {
    console.log(windowWidth.value.length);
  });