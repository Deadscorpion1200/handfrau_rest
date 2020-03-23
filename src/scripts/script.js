$('.navbar-mobile__menu').on('click', function(e)
{
  e.preventDefault();
  $(this).toggleClass('navbar-mobile__menu_active');
  $('.navbar-nav__mobile').toggleClass('navbar-nav__mobile_active');

})