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

// Переключение вкладок
let typeList = document.querySelector('.calc-type__list'),
    typeListItems = typeList.querySelectorAll('.calc-type__category'),
    typeListText = document.querySelectorAll('.calc-type__description_adaptive');

const toggleTabContent = (index) => {
  for (let i = 0; i < typeListText.length; i++) {
    if (index === i) {
      typeListItems[i].classList.add('calc-type__category_active');
      typeListText[i].classList.remove('calc-type__description_adaptive--d-none');
    } else {
      typeListItems[i].classList.remove('calc-type__category_active');
      typeListText[i].classList.add('calc-type__description_adaptive--d-none');
    }
  }
};

typeList.addEventListener('click', (event) => {
  let target = event.target;
  target = target.closest('.calc-type__category');

  if (target) {
    typeListItems.forEach((item, i) => {
      if (item === target) {
        toggleTabContent(i);
      }
    });
  }
});


// Увеличение числа метров ковролина
let amount = document.getElementById('amount'),
    minus = document.querySelector('.minus-img'),
    plus = document.querySelector('.plus-img');

minus.addEventListener('click', () => {
  if (+amount.textContent > 1) {
    amount.textContent--;
  }
});

plus.addEventListener('click', () => {
  amount.textContent++;
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

inputRange.addEventListener('input', (event) => {
  inputRange.value = event.target.value;
  area.textContent = +inputRange.value;

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

  // Передаём в модалку данные из калькулятора
  let modalCount = document.querySelector('.add-modal-contact__count');
  modalCount.textContent = result.textContent;
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
  // Берём виды уборки из вкладки в модалку
  let typeCleaning = document.getElementById('cleaning-type'),
    typeListItemsActive = typeList.querySelector('.calc-type__category_active'),
    cleaningTime = document.getElementById('cleaning-time'),
    cleaningTimeValue = cleaningTime.options[cleaningTime.selectedIndex].value,
    special = document.getElementById('special');
  if (typeListItemsActive.textContent === 'Утренняя') {
    typeCleaning.textContent = 'утреннюю';
    special.textContent = '';
  } else if (typeListItemsActive.textContent === 'Вечерняя') {
    typeCleaning.textContent = 'вечернюю';
    special.textContent = '';
  } else if (typeListItemsActive.textContent === 'Ежедневная') {
    typeCleaning.textContent = 'ежедневную';
    special.textContent = '';
  } else if (typeListItemsActive.textContent === 'Генеральная') {
    typeCleaning.textContent = 'генеральную';
    special.textContent = '';
  } else if (typeListItemsActive.textContent === 'После ЧП') {
    typeCleaning.textContent = '';
    special.textContent = 'после ЧП';
  }

  if (document.documentElement.clientWidth < 769) {
    if (cleaningTimeValue === 'morning') {
      typeCleaning.textContent = 'утреннюю';
      special.textContent = '';
    } else if (cleaningTimeValue === 'evening') {
      typeCleaning.textContent = 'вечернюю';
      special.textContent = '';
    } else if (cleaningTimeValue === 'everyday') {
      typeCleaning.textContent = 'ежедневную';
      special.textContent = '';
    } else if (cleaningTimeValue === 'general') {
      typeCleaning.textContent = 'генеральную';
      special.textContent = '';
    } else if (cleaningTimeValue === 'emergency') {
      typeCleaning.textContent = '';
      special.textContent = 'после ЧП';
    }
  }

  $('#order-calc').on('shown.bs.modal', function () {
    var services = '';
    $('.add-serv-label').hide();

    $('.additional-service-list li.active').each(function (e) {
      var title = $(this).find('.title').text();
      var params = $(this).find('.params').html() || '';
      var value = $(this).find('.count').val() || '';
      var serviceId = $(this).data('service-id');

      services += '<li data-service-id="' + serviceId + '"><span class="title">' + title + '</span><span class="params">' + value + ' ' + params + '</span><span class="close"></span></li>';
    });

    $('.service-list').html(services);

    if (services) {
      $('.add-serv-label').show();
    }

  });

  $('body').on('click', '.service-list .close', function () {
    var id = $(this).parent('li').data('service-id');

    $(this).parent('li').remove();
    $('.additional-service-list li[data-service-id=' + id + ']').removeClass('active');

    $('.select-type-clean').change();
  });
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