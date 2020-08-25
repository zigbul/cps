const feedBackOpenButtonMenu = document.querySelector('#message-btn');
const feedBackOpenButtonHeader = document.querySelector('#msg-btn');
const feedBack = document.querySelector('.modal--feedback');
const feedBackCloseButton = feedBack.querySelector('.modal__btn');
const feedBackInput = feedBack.querySelector('input');
const feedBackOverlay = document.querySelector('.overlay--modal');
const ESC_KEYCODE = 27;

const feedBackFocused = function () {
   feedBackInput.focus();
}

const openFeedBackPopup = function () {
   feedBack.classList.add('modal--active');
   feedBackOverlay.classList.add('overlay--modal-active');
   document.addEventListener('keydown', escapeKeyDownFeedBackHandler);
   feedBackOverlay.addEventListener('click', overlayClickFeedBackHandler);
   feedBackCloseButton.addEventListener('click', feedBackCloseButtonHandler);
   // setTimeout(feedBackFocused, 500);
   feedBackOpenButtonMenu.removeEventListener('click', feedBackPopupOpenHandler);
   feedBackOpenButtonHeader.removeEventListener('click', feedBackPopupOpenHandler);
}

const feedBackPopupOpenHandler = function () {
   openFeedBackPopup();
}

const closeFeedBackPopup = function () {
   feedBack.classList.remove('modal--active');
   feedBackOverlay.classList.remove('overlay--modal-active');
   feedBackOpenButtonMenu.addEventListener('click', feedBackPopupOpenHandler);
   feedBackOpenButtonHeader.addEventListener('click', feedBackPopupOpenHandler);
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

feedBackOpenButtonMenu.addEventListener('click', feedBackPopupOpenHandler);
feedBackOpenButtonHeader.addEventListener('click', feedBackPopupOpenHandler);