const feedBackOpenBtn = document.querySelector('#message-btn');
const feedBackOpenButton = document.querySelector('#msg-btn');
const feedBack = document.querySelector('.modal--feedback');
const feedBackCloseButton = feedBack.querySelector('.modal__btn');
const feedBackInput = feedBack.querySelector('input');
const feedBackOverlay = document.querySelector('.overlay--modal');

const feedBackFocused = function () {
   feedBackInput.focus();
}

const feedBackPopupOpenHandler = function () {
   feedBack.classList.add('modal--active');
   feedBackOverlay.classList.add('overlay--modal-active');
   document.addEventListener('keydown', escapeKeyDownFeedBackHandler, { once: true });
   feedBackOverlay.addEventListener('click', overlayClickFeedBackHandler, { once: true });
   feedBackCloseButton.addEventListener('click', feedBackCloseButtonHandler, { once: true });
   setTimeout(feedBackFocused, 500);
}

const closeFeedBackPopup = function () {
   feedBack.classList.remove('modal--active');
   feedBackOverlay.classList.remove('overlay--modal-active');
   feedBackOpenBtn.addEventListener('click', feedBackPopupOpenHandler, { once: true });
   feedBackOpenButton.addEventListener('click', feedBackPopupOpenHandler, { once: true });
}

const escapeKeyDownFeedBackHandler = function (e) {
   if (e.keyCode == ESC_KEYCODE) {
      closeFeedBackPopup();
   }
}

const overlayClickFeedBackHandler = function (e) {
   if (e.target = feedBackOverlay) {
      closeFeedBackPopup();
   }
}

const feedBackCloseButtonHandler = function () {
   closeFeedBackPopup();
}

feedBackOpenBtn.addEventListener('click', feedBackPopupOpenHandler, { once: true });
feedBackOpenButton.addEventListener('click', feedBackPopupOpenHandler, { once: true });