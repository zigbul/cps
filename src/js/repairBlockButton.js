const buttonRepair = document.querySelector('.repair__btn');
const repairContainer = document.querySelector('.repair__list');

const openBlock = function () {
   buttonRepair.classList.remove('btn--show');
   buttonRepair.classList.add('btn--hide');
   buttonRepair.textContent = 'Скрыть';
   repairContainer.classList.remove('repair__list--show');
   repairContainer.classList.add('repair__list--hide');
}

const closeBlock = function () {
   buttonRepair.classList.remove('btn--hide');
   buttonRepair.classList.add('btn--show');
   buttonRepair.textContent = 'Показать все';
   repairContainer.classList.remove('repair__list--hide');
   repairContainer.classList.add('repair__list--show');
}

buttonRepair.addEventListener('click', function () {
   if (buttonRepair.classList.contains('btn--show')) {
      openBlock();
   } else {
      closeBlock();
   }
});