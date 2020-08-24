const button = document.querySelector('.section__btn');
const brandsContainer = document.querySelector('.section__list');

button.addEventListener('click', function(){
   if(button.classList.contains('btn--show')) {
      button.classList.remove('btn--show');
      button.classList.add('btn--hide');
      button.textContent = 'Скрыть';
      brandsContainer.classList.remove('section__list--show');
      brandsContainer.classList.add('section__list--hide');
   } else {
      button.classList.remove('btn--hide');
      button.classList.add('btn--show');
      button.textContent = 'Показать все';
      brandsContainer.classList.remove('section__list--hide');
      brandsContainer.classList.add('section__list--show');
   }
});