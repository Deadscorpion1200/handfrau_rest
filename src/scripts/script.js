let slider = $('.range');
let fill = $('.bar .fill');
function setBar()
{
  fill.css('width', slider.val()+'%')
  square = slider.val()
}

slider.on('input', setBar);
setBar();

$('.navbar-mobile__menu').on('click', function(e)
{
  e.preventDefault();
  $(this).toggleClass('navbar-mobile__menu_active');
  $('.navbar-nav__mobile').toggleClass('navbar-nav__mobile_active')
})

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
// let swiper2 = new Swiper('.dirt-slider-wrap',{
//   direction: 'vertical',
//   loop: true,
//   slidesPerView: 1,
//   centeredSlides: true,
// })