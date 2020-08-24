const callOpenBtn = document.querySelector('#phone-btn');
const callOpenButton = document.querySelector('#cell-btn');
const callWrapper = document.querySelector('.modal--call');
const callCloseButton = callWrapper.querySelector('.modal__btn');
const callInput = callWrapper.querySelector('input');
const callOverlay = document.querySelector('.overlay--modal');

const callFocused = function () {
   callInput.focus();
}

const callPopupOpenHandler = function () {
   callWrapper.classList.add('modal--active');
   callOverlay.classList.add('overlay--modal-active');
   document.addEventListener('keydown', escapeKeyDownCallHandler, { once: true });
   callOverlay.addEventListener('click', overlayClickCallHandler, { once: true });
   callCloseButton.addEventListener('click', callCloseButtonHandler, { once: true });
   setTimeout(callFocused, 500);
}

const closeCallPopup = function () {
   callWrapper.classList.remove('modal--active');
   callOverlay.classList.remove('overlay--modal-active');
   callOpenBtn.addEventListener('click', callPopupOpenHandler, { once: true });
   callOpenButton.addEventListener('click', callPopupOpenHandler, { once: true });
}

const escapeKeyDownCallHandler = function (e) {
   if (e.keyCode == 27) {
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

callOpenBtn.addEventListener('click', callPopupOpenHandler, { once: true });
callOpenButton.addEventListener('click', callPopupOpenHandler, { once: true });