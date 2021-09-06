import "./slider";
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import modalDatainfo from './modules/changeModal';

window.addEventListener("DOMContentLoaded", () => {
  'use strict';

  let dataFromModals = {};

  modalDatainfo(dataFromModals);
  modal();
  forms(dataFromModals);
  tabs({
    parentSelector: '.balcon_icons',
    tabSelector: '.balcon_icons_img',
    contentSelector: '.big_img img',
    activeClass: 'do_image_more',
    displayMode: 'inline-block'
  });
  tabs({
    parentSelector: '.glazing_slider',
    tabSelector: '.glazing_block',
    contentSelector: '.glazing_content',
    activeClass: 'active',
    displayMode: 'block'
  });
  tabs({
    parentSelector: '.decoration_slider',
    tabSelector: '.no_click',
    contentSelector: '.decoration_content > div > div',
    activeClass: 'after_click',
    displayMode: 'block'
  });
});