import $ from 'jquery';
import 'slick-carousel';

window.addEventListener('DOMContentLoaded', function() {
  var slider = $('.js-mob-slider');

  slider.slick({
    fade: true,
    cssEase: 'linear'
  });

  slider.each(function(index, el) {
    var counter = $(this).siblings('.js-mob-slider-count');
    var currentSlideNum = counter.find('.js-mob-slider-current-slide')[0];
    var totalSlidesNum = counter.find('.js-mob-slider-total-slides')[0];

    totalSlidesNum.innerText = $(this).slick('getSlick').slideCount;

    $(this).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      currentSlideNum.innerText = nextSlide + 1;
    });
  });

});
