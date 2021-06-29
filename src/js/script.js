const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');
const backdrop = document.querySelector('.backdrop');

hamburger.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);
backdrop.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.classList.toggle('active');
}
