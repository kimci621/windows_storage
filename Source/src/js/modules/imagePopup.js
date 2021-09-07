const imagePopup = () => {
  const parentOfImages = document.querySelector('.works .container .row'),
    popupImg = document.createElement('div'),
    img = document.createElement('img'),
    scrollWidth = hideScroll();

  parentOfImages.appendChild(popupImg);
  popupImg.classList.add('popup');
  popupImg.classList.add('faded');
  popupImg.style.cssText = 'display: none; justify-content: center; align-items: center;';

  popupImg.appendChild(img);
  
  parentOfImages.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target && e.target.classList.contains('preview')) {
      popupImg.style.display = 'flex';
      let href = e.target.parentNode.getAttribute('href');
      img.setAttribute('src', href);
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scrollWidth}px`;
    }

    if(e.target == popupImg){
      popupImg.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
    }
  });

  function hideScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }
};

export default imagePopup;