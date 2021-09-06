const modal = () => {
  function bindModal(openTrigger, Modalselector, closeTrigger, BgOverlayClick = true) {
    const open = document.querySelectorAll(openTrigger),
      modal = document.querySelector(Modalselector),
      close = document.querySelector(closeTrigger),
      popups = document.querySelectorAll('[data-popup]');


    open.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      });
    });

    close.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
      popups.forEach((item) => {
        item.style.display = 'none';
      });
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal && BgOverlayClick) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        popups.forEach((item) => {
          item.style.display = 'none';
        });
      }
    });
  }

  function openModalTimer(selector, time) {
    setTimeout(function () {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }, time);
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup_close');
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

  openModalTimer('.popup', 60000);
};

export default modal;