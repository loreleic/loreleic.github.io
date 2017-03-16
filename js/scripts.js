//------- SITE LOADER ---//
jQuery(".spinner").fadeOut();
jQuery(".loading-mask").delay(600).fadeOut("slow");

/*---- NAV MENU ---- */
$('.site-menu').on('click', function() {
  $(this).toggleClass('triggered');
  $('.sidebar-menu').addClass('sidebar-open');
  $('.page-wrapper').addClass('page-wrapper-side');
});
$('.menu-close').on('click', function() {
  $('.sidebar-menu').removeClass('sidebar-open');
  $('.page-wrapper').removeClass('page-wrapper-side');
});
$('.smenu li a').on('click', function() {
  $('.sidebar-menu').removeClass('sidebar-open');
  $('.page-wrapper').removeClass('page-wrapper-side');
});
$('#page').on('click', function() {
  $('.sidebar-menu').removeClass('sidebar-open');
  $('.page-wrapper').removeClass('page-wrapper-side');
});
