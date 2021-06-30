// Menu, hero block
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

//Skills block
const barPercents = document.querySelectorAll('.bar-item-skills__percent');
const barProgresses = document.querySelectorAll('.bar-item-skills__progress');

barPercents.forEach((elem, index) => {
  const percent = elem.innerText;
  barProgresses[index].style.width = percent;
});
