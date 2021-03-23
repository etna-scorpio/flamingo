import $ from 'jquery';
import 'slick-carousel';

var slider = $('.js-journey-slider'),
  navForSlider = $('.js-journey-slider-nav');

window.addEventListener('DOMContentLoaded', function() {

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
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }]
  });

});
