const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.burger-menu');
const form = $('.subscribe__form');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

$(document).ready(function(){
  $('.header__gallery').bxSlider({
    controls: false,
    pager: false,
    speed: 1000,
    pause: 2000,
    moveSlides: 1,
    auto: true,
    infiniteLoop: true,
    slideWidth: Number(document.querySelector('.header__gallery').offsetWidth),
  });
});