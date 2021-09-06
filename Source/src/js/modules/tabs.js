const tabs = ({
  parentSelector,
  tabSelector,
  contentSelector,
  activeClass,
  displayMode
}) => {
  const parent = document.querySelector(parentSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector),
    activeTabClass = activeClass,
    display = displayMode;

  function HideTabContent() {
    tab.forEach(item => {
      item.classList.remove(activeTabClass);
    });

    content.forEach(item => {
      item.style.display = 'none';
    });
  }

  function showTabContent(i = 0) {
    content[i].style.display = display;
    tab[i].classList.add(activeTabClass);
  }

  HideTabContent();
  showTabContent();

  parent.addEventListener('click', (e) => {
    if (e.target && (e.target.classList.contains(tabSelector.slice(1)) ||
        e.target.parentNode.classList.contains(tabSelector.slice(1)))) {
      tab.forEach((item, index) => {
        if (e.target == item || e.target.parentNode == item) {
          HideTabContent();
          showTabContent(index);
          // console.log('tab click');
        }
      });
    }
  });
};

export default tabs;