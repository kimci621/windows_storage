import "./slider";
import modal from './modules/modal';
import tabs from './modules/tabs';

window.addEventListener("DOMContentLoaded", () => {
  modal();
  tabs({
    parentSelector: '.glazing_slider',
    tabSelector: '.glazing_block',
    contentSelector: '.glazing_content',
    activeClass: 'active'
  });
  tabs({
    parentSelector: '.decoration_slider',
    tabSelector: '.no_click',
    contentSelector: '.decoration_content > div > div',
    activeClass: 'after_click'
  });
});