const openButtons = document.querySelectorAll('.message-btn');
const modal = document.querySelector('.modal--feedback');
const closeButton = modal.querySelector('.modal__btn');
const input = modal.querySelector('input');
const overlay = document.querySelector('.overlay--modal');
const ESC_KEYCODE = 27;
const body = document.querySelector('body');

const openModal = function () {
   modal.classList.add('modal--active');
   overlay.classList.add('overlay--modal-active');
   document.addEventListener('keydown', escapeKeyDownHandler);
   overlay.addEventListener('click', overlayClickHandler);
   closeButton.addEventListener('click', closeButtonClickHandler);
   input.focus();
   openButtons.forEach(function(openButton) {
      openButton.removeEventListener('click', openButtonClickHandler);
   });
   body.style.overflowY = 'hidden';
}

const openButtonClickHandler = function () {
   openModal();
}

const closeModal = function () {
   modal.classList.remove('modal--active');
   overlay.classList.remove('overlay--modal-active');
   openButtons.forEach(function(openButton) {
      openButton.addEventListener('click', openButtonClickHandler);
   });
   document.removeEventListener('keydown', escapeKeyDownHandler);
   overlay.removeEventListener('click', overlayClickHandler);
   closeButton.removeEventListener('click', closeButtonClickHandler);
   body.style.overflowY = 'auto';
}

const escapeKeyDownHandler = function (e) {
   if (e.keyCode == ESC_KEYCODE) {
      closeModal();
   }
}

const overlayClickHandler = function (e) {
   if (e.target == overlay) {
      closeModal();
   }
}

const closeButtonClickHandler = function () {
   closeModal();
}

openButtons.forEach(function(openButton) {
   openButton.addEventListener('click', openButtonClickHandler);
});