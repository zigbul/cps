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
   openButton.removeEventListener('click', openButtonClickHandler);
}

const openButtonClickHandler = function () {
   openMenu();
}

export const closeMenu = function () {
   popup.classList.remove('burger-menu__popup--active');
   overlay.classList.remove('overlay--burger-active');
   openButton.addEventListener('click', openButtonClickHandler);
   document.removeEventListener('keydown', escapeKeyDownHandler);
   overlay.removeEventListener('click', overlayClickHandler);
   closeButton.removeEventListener('click', closeButtonHandler);
}

export const escapeKeyDownHandler = function (e) {
   const modal = document.querySelector('.overlay--modal');
   if (e.keyCode == ESC_KEYCODE && !modal.classList.contains('overlay--modal-active')) {
      closeMenu();
   }
}

const overlayClickHandler = function (e) {
   if (e.target == overlay) {
      closeMenu();
   }
}

const closeButtonHandler = function () {
   closeMenu();
}

openButton.addEventListener('click', openButtonClickHandler);