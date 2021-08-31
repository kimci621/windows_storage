"use strict";

const modal = () => {
  function bindModal(openTrigger, Modalselector, closeTrigger) {
    const open = document.querySelectorAll(openTrigger),
      modal = document.querySelector(Modalselector),
      close = document.querySelector(closeTrigger);

    open.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // document.body.classList.add('modal-open');
      });
    });

    close.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
      // document.body.classList.remove('modal-open');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        // document.body.classList.remove('modal-open');
      }
    });
  }

  function openModalTimer(selector, time) {
    setTimeout(function(){
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }, time);
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup_close');
  openModalTimer('.popup', 60000);
};

export default modal;