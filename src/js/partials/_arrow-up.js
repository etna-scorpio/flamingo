import $ from 'jquery';

if ($('.js-scroll-to-top')) {

  var arrowUp = $('.js-scroll-to-top'),
    activeClass = 'is-visible';

  $(window).scroll(function() {
    if ($(window).scrollTop() > $(window).height() && arrowUp.not(activeClass)) {
      arrowUp.addClass(activeClass);
    } else {
      console.log('less');
      arrowUp.removeClass(activeClass);
    }
  });

  $('.js-scroll-to-top').click(function() {
    $('html, body').animate({scrollTop: 0}, 500);
  });
}
