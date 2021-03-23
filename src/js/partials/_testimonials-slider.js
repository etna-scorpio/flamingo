import $ from 'jquery';
import 'slick-carousel';

var slider = $('.js-slider-testimonials');

window.addEventListener('DOMContentLoaded', function() {
  slider.slick({
    adaptiveHeight: true
  });

  slider.each(function(index, el) {
    var counter = $(this).siblings('.js-slider-testimonials-count');
    var currentSlideNum = counter.find('.js-slider-testimonials-current-slide')[0];
    var totalSlidesNum = counter.find('.js-slider-testimonials-total-slides')[0];

    totalSlidesNum.innerText = $(this).slick('getSlick').slideCount;

    $(this).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      currentSlideNum.innerText = nextSlide + 1;
    });
  });

});
