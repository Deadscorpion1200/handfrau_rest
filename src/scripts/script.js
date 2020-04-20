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
    resultPersonal = document.querySelectorAll('.calc-result-personal__man'),
    resultHours = document.querySelectorAll('.calc-result-personal__hour');
    console.log('resultPersonal: ', resultPersonal);
    console.log('resultHours: ', resultHours);

inputRange.addEventListener('input', (event) => {
  inputRange.value = event.target.value;
  area.textContent = +inputRange.value;
  console.log(typeof +inputRange.value);

  // Количество людей и часов
  for (let i = 0; i < resultPersonal.length && i < resultHours.length; i++) {
    if (+inputRange.value === 10) {
      resultPersonal[i].textContent = '1 человек';
      resultHours[i].textContent = '2 часа';
    } else if (+inputRange.value === 20) {
      resultPersonal[i].textContent = '1 человек';
      resultHours[i].textContent = '4 часа';
    } else if (+inputRange.value === 30) {
      resultPersonal[i].textContent = '1 человек';
      resultHours[i].textContent = '6 часов';
    } else if (+inputRange.value === 40) {
      resultPersonal[i].textContent = '1 человек';
      resultHours[i].textContent = '8 часов';
    } else if (+inputRange.value === 50) {
      resultPersonal[i].textContent = '2 человека';
      resultHours[i].textContent = '5 часов';
    } else if (+inputRange.value === 60) {
      resultPersonal[i].textContent = '2 человека';
      resultHours[i].textContent = '6 часов';
    } else if (+inputRange.value === 70) {
      resultPersonal[i].textContent = '2 человека';
      resultHours[i].textContent = '7 часов';
    } else if (+inputRange.value === 80) {
      resultPersonal[i].textContent = '2 человека';
      resultHours[i].textContent = '8 часов';
    } else if (+inputRange.value === 90) {
      resultPersonal[i].textContent = '3 человека';
      resultHours[i].textContent = '6 часов';
    } else if (+inputRange.value === 100) {
      resultPersonal[i].textContent = '3 человека';
      resultHours[i].textContent = '7 часов';
    } else if (+inputRange.value === 110) {
      resultPersonal[i].textContent = '3 человека';
      resultHours[i].textContent = '8 часов';
    } else if (+inputRange.value === 120) {
      resultPersonal[i].textContent = '3 человека';
      resultHours[i].textContent = '8 часов';
    } else if (+inputRange.value === 130) {
      resultPersonal[i].textContent = '4 человека';
      resultHours[i].textContent = '7 часов';
    } else if (+inputRange.value === 140) {
      resultPersonal[i].textContent = '4 человека';
      resultHours[i].textContent = '7 часов';
    } else if (+inputRange.value === 150) {
      resultPersonal[i].textContent = '4 человека';
      resultHours[i].textContent = '8 часов';
    } else if (+inputRange.value === 160) {
      resultPersonal[i].textContent = '4 человека';
      resultHours[i].textContent = '8 часов';
    } else if (+inputRange.value === 170) {
      resultPersonal[i].textContent = '5 человек';
      resultHours[i].textContent = '7 часов';
    } else if (+inputRange.value >= 180 && +inputRange.value <= 200) {
      resultPersonal[i].textContent = '5 человек';
      resultHours[i].textContent = '8 часов';
    }
  }

  // Калькулятор
  const calc = (price = 200) => {
    result.textContent = price * inputRange.value;
  };
  calc();
});

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