import $ from 'jquery';
import 'slick-carousel';

window.addEventListener('DOMContentLoaded', function() {
  var slider = $('.js-journey-slider'),
    navForSlider = $('.js-journey-slider-nav');

  slider.slick({
    fade: true,
    cssEase: 'linear',
    asNavFor: '.js-journey-slider-nav'
  });

  navForSlider.slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.js-journey-slider',
    arrows: false,
    focusOnSelect: true,
    infinite: true,
    responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }]
  });

});
