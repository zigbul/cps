const slider = document.querySelector('.swiper-container');
const slider1 = document.querySelector('.swiper-container-1');
const slider2 = document.querySelector('.swiper-container-2');

let mySwiper;
let mySwiper1;
let mySwiper2;

function mobileSlider() {
  if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,
      // slideToClickedSlide: true,
      pagination: {
        el: '.pag',
        clickable: true,
      },
    });
    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 767) {
    slider.dataset.mobile = 'false';

    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
};

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});

function mobileSlider1() {
  if (window.innerWidth <= 767 && slider1.dataset.mobile == 'false') {
    mySwiper1 = new Swiper(slider1, {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,
      // slideToClickedSlide: true,
      pagination: {
        el: '.pag-1',
        clickable: true,
      },
    });
    slider1.dataset.mobile = 'true';
  }

  if (window.innerWidth > 767) {
    slider1.dataset.mobile = 'false';

    if (slider1.classList.contains('swiper-container-initialized')) {
      mySwiper1.destroy();
    }
  }
};

mobileSlider1();

window.addEventListener('resize', () => {
  mobileSlider1();
});

function mobileSlider2() {
  if (window.innerWidth <= 767 && slider2.dataset.mobile == 'false') {
    mySwiper2 = new Swiper(slider2, {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,
      // slideToClickedSlide: true,
      pagination: {
        el: '.pag-2',
        clickable: true,
      },
    });
    slider2.dataset.mobile = 'true';
  }

  if (window.innerWidth > 767) {
    slider2.dataset.mobile = 'false';

    if (slider2.classList.contains('swiper-container-initialized')) {
      mySwiper2.destroy();
    }
  }
};

mobileSlider2();

window.addEventListener('resize', () => {
  mobileSlider2();
});