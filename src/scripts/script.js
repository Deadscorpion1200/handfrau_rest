let slider = $('.range');
let fill = $('.bar .fill');
function setBar()
{
  fill.css('width', (slider.val() / 20)+'%');
  square = slider.val();
}

slider.on('input', setBar);
setBar();

$('.navbar-mobile__menu').on('click', function(e)
{
  e.preventDefault();
  $(this).toggleClass('navbar-mobile__menu_active');
  $('.navbar-nav__mobile').toggleClass('navbar-nav__mobile_active');
});
// Окрашивание плиток
let services = document.querySelector('.calc-calculator-services');
services.addEventListener('click', (event) => {
  let target = event.target;
  target = target.closest('.calc-calculator__service');
  if (target.matches('.calc-calculator__service')) {
    target.classList.toggle('calc-calculator__service--active');
  }
});
// бегунок
let inputRange = document.querySelector('.range'),
    area = document.querySelector('.calc-calculator-square__square_count'),
    result = document.querySelector('.calc-result-sum__count'),
    resultPersonal = document.querySelector('.calc-result-personal__man'),
    resultHours = document.querySelector('.calc-result-personal__hour');
    console.log('resultPersonal: ', resultPersonal.textContent);
    console.log('resultHours: ', resultHours.textContent);

inputRange.addEventListener('input', (event) => {
  inputRange.value = event.target.value;
  area.textContent = +inputRange.value;

  // Количество людей и часов
  if (+inputRange.value === 10) {
    console.log(1);
    resultPersonal.textContent = '1 человек';
    resultHours.textContent = '2 часа';
  } else if (+inputRange.value === 20) {
    console.log(2);
    resultPersonal.textContent = '1 человек';
    resultHours.textContent = '4 часа';
  } else if (+inputRange.value === 30) {
    console.log(3);
    resultPersonal.textContent = '1 человек';
    resultHours.textContent = '6 часов';
  } else if (+inputRange.value === 40) {
    resultPersonal.textContent = '1 человек';
    resultHours.textContent = '8 часов';
  } else if (+inputRange.value === 50) {
    resultPersonal.textContent = '2 человека';
    resultHours.textContent = '5 часов';
  } else if (+inputRange.value === 60) {
    resultPersonal.textContent = '2 человека';
    resultHours.textContent = '6 часов';
  } else if (+inputRange.value === 70) {
    resultPersonal.textContent = '2 человека';
    resultHours.textContent = '7 часов';
  } else if (+inputRange.value === 80) {
    resultPersonal.textContent = '2 человека';
    resultHours.textContent = '8 часов';
  } else if (+inputRange.value === 90) {
    resultPersonal.textContent = '3 человека';
    resultHours.textContent = '6 часов';
  } else if (+inputRange.value === 100) {
    resultPersonal.textContent = '3 человека';
    resultHours.textContent = '7 часов';
  } else if (+inputRange.value === 110) {
    resultPersonal.textContent = '3 человека';
    resultHours.textContent = '8 часов';
  } else if (+inputRange.value === 120) {
    resultPersonal.textContent = '3 человека';
    resultHours.textContent = '8 часов';
  } else if (+inputRange.value === 130) {
    resultPersonal.textContent = '4 человека';
    resultHours.textContent = '7 часов';
  } else if (+inputRange.value === 140) {
    resultPersonal.textContent = '4 человека';
    resultHours.textContent = '7 часов';
  } else if (+inputRange.value === 150) {
    resultPersonal.textContent = '4 человека';
    resultHours.textContent = '8 часов';
  } else if (+inputRange.value === 160) {
    resultPersonal.textContent = '4 человека';
    resultHours.textContent = '8 часов';
  } else if (+inputRange.value === 170) {
    resultPersonal.textContent = '5 человек';
    resultHours.textContent = '7 часов';
  } else if (+inputRange.value >= 180 && +inputRange.value <= 200) {
    resultPersonal.textContent = '5 человек';
    resultHours.textContent = '8 часов';
  }

  // Калькулятор
  const calc = (price = 200) => {
    result.textContent = price * inputRange.value;
  };
  calc();
});

// popup'ы
let window1 = document.querySelector('.modal');
let window2 = document.querySelector('.add-modal');

$('.navbar-contact__button').on('click', function(){
  window1.classList.add('modal_active');
});
$('.main-button__order').on('click', function(){
  window1.classList.add('modal_active');
});
$('.main-button__discover').on('click', function(){
  window1.classList.add('modal_active');
})
$('.main-button__immediate').on('click', function(){
  window1.classList.add('modal_active');
});
$('.special-gallery-slide__button').on('click', function(){
  window1.classList.add('modal_active');
});
$('.dirt-text__button').on('click', function(){
  window1.classList.add('modal_active');
});
$('.command-button-slide').on('click', function(){
  window1.classList.add('modal_active');
})
$('.trust-button').on('click', function(){
  window1.classList.add('modal_active');
});
$('.why__button').on('click', function(){
  window1.classList.add('modal_active');
});
$('.call__button').on('click', function(){
  window1.classList.add('modal_active');
});
$('.tenders__button').on('click', function(){
  window1.classList.add('modal_active');
})
$('.button-main').on('click', function(){
  window2.classList.add('add-modal_active');
});
$('.modal-contact__close').on('click', function(){
  window1.classList.remove('modal_active')
  window2.classList.remove('add-modal_active')
});

// слайдеры
let swiper1 = new Swiper('.special-gallery',{
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.special-gallery__pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320:
    {
      slidesPerView: 1
    },
    576:
    {
      slidesPerView: 2,
    }
  }
});


let swiper2 = new Swiper ('.command-slider-container', {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  // If we need pagination
  pagination: {
    clickable: true,
    el: '.command-pagination',
  },
  

  // Navigation arrows
  navigation: {
    nextEl: '.command-button-next',
    prevEl: '.command-button-prev',
  },

  breakpoints: {
    320:
    {
      slidesPerView: 1
    },
    768:
    {
      slidesPerView: 2,
      centredSlides: false
    },
    991:
    {
      slidesPerview: 3,
      centeredSlides: true,
    }
  }
});

let swiper3 = new Swiper('.materials-slider',{
  loop: true,
  slidesPerView: 2,
  navigation: {
    nextEl: '.materials-button-next',
    prevEl: '.materials-button-prev',
  },
  pagination: {
    clickable: true,
    el: '.materials-slider-pagination',
  }
  
});
let swiper4 = new Swiper('.partners-slider-container',
{
  loop: true,
  navigation: {
    nextEl: '.partners-button-next',
    prevEl: '.partners-button-prev'
  },
  breakpoints: {
    1200:
    {
      slidesPerView: 4,
    },
    991:
    {
      slidesPerView: 3
    },
    768:
    {
      spaceBetween: 90,
      slidesPerView: 2
    },
    320:
    {
      centeredSlides: true,
      splidesPerView: 1,
      pagination: {
        clickable: true,
        el: '.partners-pagination',
      }
    }
  }
});
let swiper5 = new Swiper('.reviews-slider-container',
{
  speed: 600,
  loop: true,
  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev'
  },
  pagination: {
    clickable: true,
    el: '.reviews-pagination',
  },
  slidesPerView: 1,
  spaceBetween: 90,
  centeredSlides: true,
});