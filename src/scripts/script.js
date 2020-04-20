let slider = $('.range');
let fill = $('.bar .fill');
let value = $('.calc-calculator-square__square_count');
// value.textContent = '10';
function rangeSquare()
{
  value.textContent = square
  console.log(value);
}
function setBar()
{
  fill.css('width', (slider.val() / 20)+'%');
  square = slider.val();
  console.log(square);
  rangeSquare();
}

slider.on('input', setBar);
setBar();


$('.navbar-mobile__menu').on('click', function(e)
{
  e.preventDefault();
  $(this).toggleClass('navbar-mobile__menu_active');
  $('.navbar-nav__mobile').toggleClass('navbar-nav__mobile_active');
});

let services = document.querySelector('.calc-calculator-services');
services.addEventListener('click', (event) => {
  let target = event.target;
  target = target.closest('.calc-calculator__service');
  if (target.matches('.calc-calculator__service')) {
    target.classList.toggle('calc-calculator__service--active');
  }
});
let modal = document.querySelector('.modal')
// popup'ы
$('.modal-contact__close').on('click', function()
{
  modal.classList.remove('modal_active');
})

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