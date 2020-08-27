const callOpenButtonMenu = document.querySelector('#phone-btn');
const callOpenButtonHeader = document.querySelector('#cell-btn');
const callWrapper = document.querySelector('.modal--call');
const callCloseButton = callWrapper.querySelector('.modal__btn');
const callInput = callWrapper.querySelector('input');
const callOverlay = document.querySelector('.overlay--modal');
const ESC_KEYCODE = 27;

const openCallPopup = function () {
   callWrapper.classList.add('modal--active');
   callOverlay.classList.add('overlay--modal-active');
   document.addEventListener('keydown', escapeKeyDownCallHandler);
   callOverlay.addEventListener('click', overlayClickCallHandler);
   callCloseButton.addEventListener('click', callCloseButtonHandler);
   callInput.focus();
   callOpenButtonMenu.removeEventListener('click', callPopupOpenHandler);
   callOpenButtonHeader.removeEventListener('click', callPopupOpenHandler);
}

const callPopupOpenHandler = function () {
   openCallPopup();
}

const closeCallPopup = function () {
   callWrapper.classList.remove('modal--active');
   callOverlay.classList.remove('overlay--modal-active');
   callOpenButtonMenu.addEventListener('click', callPopupOpenHandler);
   callOpenButtonHeader.addEventListener('click', callPopupOpenHandler);
   document.removeEventListener('keydown', escapeKeyDownCallHandler);
   callOverlay.removeEventListener('click', overlayClickCallHandler);
   callCloseButton.removeEventListener('click', callCloseButtonHandler);
}

const escapeKeyDownCallHandler = function (e) {
   if (e.keyCode == ESC_KEYCODE) {
      closeCallPopup();
   }
}

const overlayClickCallHandler = function (e) {
   if (e.target = callOverlay) {
      closeCallPopup();
   }
}

const callCloseButtonHandler = function () {
   closeCallPopup();
}

callOpenButtonMenu.addEventListener('click', callPopupOpenHandler);
callOpenButtonHeader.addEventListener('click', callPopupOpenHandler);