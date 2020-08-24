const feedBackOpenBtn = document.querySelector('#message-btn');
const feedBackOpenButton = document.querySelector('#msg-btn');
const feedBack = document.querySelector('.modal--feedback');
const feedBackCloseButton = feedBack.querySelector('.modal__btn');
const feedBackInput = feedBack.querySelector('input');
const feedBackOverlay = document.querySelector('.overlay--modal');

const feedBackFocused = function () {
   feedBackInput.focus();
}

const openFeedBackPopup = function () {
   feedBack.classList.add('modal--active');
   feedBackOverlay.classList.add('overlay--modal-active');
   document.addEventListener('keydown', escapeKeyDownFeedBackHandler);
   feedBackOverlay.addEventListener('click', overlayClickFeedBackHandler);
   feedBackCloseButton.addEventListener('click', feedBackCloseButtonHandler);
   setTimeout(feedBackFocused, 500);
   feedBackOpenBtn.removeEventListener('click', feedBackPopupOpenHandler);
   feedBackOpenButton.removeEventListener('click', feedBackPopupOpenHandler);
}

const feedBackPopupOpenHandler = function () {
   openFeedBackPopup();
}

const closeFeedBackPopup = function () {
   feedBack.classList.remove('modal--active');
   feedBackOverlay.classList.remove('overlay--modal-active');
   feedBackOpenBtn.addEventListener('click', feedBackPopupOpenHandler);
   feedBackOpenButton.addEventListener('click', feedBackPopupOpenHandler);
   document.removeEventListener('keydown', escapeKeyDownFeedBackHandler);
   feedBackOverlay.removeEventListener('click', overlayClickFeedBackHandler);
   feedBackCloseButton.removeEventListener('click', feedBackCloseButtonHandler);
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

feedBackOpenBtn.addEventListener('click', feedBackPopupOpenHandler);
feedBackOpenButton.addEventListener('click', feedBackPopupOpenHandler);