const btnSearch = document.querySelector('.header__btn--search');
const btnClose = document.querySelector('.search-form__close');
const searchForm = document.querySelector('.search-form');
const headerBtns = document.querySelector('.header__btns');

btnSearch.addEventListener('click', () => {
  searchForm.classList.add('search-form--display');
  headerBtns.classList.add('active');

  setTimeout(() => {
    searchForm.classList.add('search-form--visible');
  }, 300);
});

btnClose.addEventListener('click', () => {

  searchForm.classList.remove('search-form--visible');
  setTimeout(() => {
    searchForm.classList.remove('search-form--display');
    headerBtns.classList.remove('active');
    searchForm.reset();
  }, 300);
});


let burger = document.querySelector('.burger');
let navList = document.querySelector('.nav__list');
let body = document.querySelector('body');

burger.addEventListener('click', function() {
  burger.classList.toggle('active');
  navList.classList.toggle('active');
  body.classList.toggle('active');
});

let removeBurger = document.querySelector('.nav__item');

removeBurger.addEventListener('click', function() {
  burger.classList.remove('active');
  navList.classList.remove('active');
  body.classList.remove('active');
});

// // Получаем элемент карусели
// const carousel = document.querySelector('.carousel');

// // Прописываем карусели
// $(carousel).carousel({interval: false});

// // Проверяем ширину экрана
// if (window.innerWidth < 576) {
//   // Включаем карусель
//   $(carousel).carousel({
//     interval: 1000
//   });
// } else {
//   // Отключаем карусель
//   $(carousel).carousel('pause');
// }

// if (document.documentElement.clientWidth > 576) {
//   $(carousel).carousel({
//     interval: 1000
//   });
// } else {
//   $(carousel).carousel('pause');
// };










