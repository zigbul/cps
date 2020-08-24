const openButton = document.querySelector('.nav__burger-btn');
const closeButton = document.querySelector('.burger-menu-nav__cross-btn');
const popup = document.querySelector('.burger-menu__popup');
const overlay = document.querySelector('.overlay--burger');
const ESC_KEYCODE = 27;

const openMenu = function () {
   popup.classList.add('burger-menu__popup--active');
   overlay.classList.add('overlay--burger-active');
   document.addEventListener('keydown', escapeKeyDownHandler);
   overlay.addEventListener('click', overlayClickHandler);
   closeButton.addEventListener('click', closeButtonHandler);
   openButton.removeEventListener('click', openHandler);
}

const openHandler = function () {
   openMenu();
}

const closeMenu = function () {
   popup.classList.remove('burger-menu__popup--active');
   overlay.classList.remove('overlay--burger-active');
   openButton.addEventListener('click', openHandler);
   document.removeEventListener('keydown', escapeKeyDownHandler);
   overlay.removeEventListener('click', overlayClickHandler);
   closeButton.removeEventListener('click', closeButtonHandler);
}

const escapeKeyDownHandler = function (e) {
   if (e.keyCode == ESC_KEYCODE) {
      closeMenu();
   }
}

const overlayClickHandler = function (e) {
   if (e.target = overlay) {
      closeMenu();
   }
}

const closeButtonHandler = function () {
   closeMenu();
}

openButton.addEventListener('click', openHandler);