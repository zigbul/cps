const burgerMenuOpenButton = document.querySelector('.nav__burger-btn');
const burgerMenuCloseButton = document.querySelector('.burger-menu-nav__cross-btn');
const burgerMenuPopup = document.querySelector('.burger-menu__popup');
const burgerOverlay = document.querySelector('.overlay--burger');
const ESC_KEYCODE = 27;

const burgerMenuOpenHandler = function () {
   burgerMenuPopup.classList.add('burger-menu__popup--active');
   burgerOverlay.classList.add('overlay--burger-active');
   document.addEventListener('keydown', escapeKeyDownHandler, { once: true });
   burgerOverlay.addEventListener('click', overlayClickHandler, { once: true });
   burgerMenuCloseButton.addEventListener('click', burgerMenuCloseButtonHandler, { once: true });
}

const closeMenu = function () {
   burgerMenuPopup.classList.remove('burger-menu__popup--active');
   burgerOverlay.classList.remove('overlay--burger-active');
   burgerMenuOpenButton.addEventListener('click', burgerMenuOpenHandler, { once: true });
}

const escapeKeyDownHandler = function (e) {
   const modalOverlayActive = document.querySelector('.overlay--modal-active');
   if (e.keyCode == ESC_KEYCODE && window.innerWidth < 1440 && !modalOverlayActive) {
      closeMenu();
   }
}

const overlayClickHandler = function (e) {
   const modalOverlayActive = document.querySelector('.overlay--modal-active');
   if (e.target = burgerOverlay && !modalOverlayActive) {
      closeMenu();
   }
}

const burgerMenuCloseButtonHandler = function () {
   closeMenu();
}

burgerMenuOpenButton.addEventListener('click', burgerMenuOpenHandler, { once: true });