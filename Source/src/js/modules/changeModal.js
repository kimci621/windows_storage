import numChecker from './checkInputsforNum';

const modalDatainfo = (modalsData) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img'),
    windowWidth = document.querySelectorAll('#width'),
    windowHeight = document.querySelectorAll('#height'),
    windowType = document.querySelectorAll('#view_type'),
    windowProfile = document.querySelectorAll('.checkbox');


  function sendDataToObj(element, event, keyName) {
    element.forEach((item, index) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN':
            modalsData[keyName] = index;
            console.log(modalsData.form);
            break;
          case 'INPUT':
            if (item.getAttribute('name') == 'checkbox-test') {
              element.forEach((checkbox, num) => {
                checkbox.checked = false;
                if (index == num) {
                  checkbox.checked = true;
                }
              });
              if (index == 0) {
                modalsData[keyName] = 'cold';
              } else {
                modalsData[keyName] = 'warm';
              }
            } else {
              modalsData[keyName] = item.value;
            }
            break;
          case 'SELECT':
            modalsData[keyName] = item.value;
            break;
        }
      });
    });
  }

  numChecker('#width');
  numChecker('#height');

  sendDataToObj(windowForm, 'click', 'form');
  sendDataToObj(windowWidth, 'input', 'width');
  sendDataToObj(windowHeight, 'input', 'height');
  sendDataToObj(windowType, 'change', 'type');
  sendDataToObj(windowProfile, 'change', 'profile');
};

export default modalDatainfo;