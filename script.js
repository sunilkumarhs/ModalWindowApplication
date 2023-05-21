'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseWindow = document.querySelector('.close-modal');
const btnsOpenWindow = document.querySelectorAll('.show-modal');
console.log(btnsOpenWindow);

const openModel = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenWindow.length; i++)
  btnsOpenWindow[i].addEventListener('click', openModel);

btnCloseWindow.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
