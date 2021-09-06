const numChecker = (selector) => {

  const Inputselector = document.querySelectorAll(selector);

  Inputselector.forEach((item) => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });
  });

};

export default numChecker;