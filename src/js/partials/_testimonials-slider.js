import $ from 'jquery';
import 'slick-carousel';

window.addEventListener('DOMContentLoaded', function() {
  var slider = $('.js-slider-testimonials');
  var wrapper = $('.js-testimonials');

  slider.slick({
    adaptiveHeight: true
  });

  slider.each(function(index, el) {
    var counter = $(this).parents(wrapper);
    var currentSlideNum = counter.find('.js-slider-testimonials-current-slide')[0];
    var totalSlidesNum = counter.find('.js-slider-testimonials-total-slides')[0];

    totalSlidesNum.innerText = $(this).slick('getSlick').slideCount;

    $(this).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      currentSlideNum.innerText = nextSlide + 1;
    });
  });

});
