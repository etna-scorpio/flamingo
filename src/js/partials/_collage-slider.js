import $ from 'jquery';
import 'slick-carousel';

window.addEventListener('DOMContentLoaded', function() {
  var wrapper = $('.js-mob-slider-wrapper'),
    slider = $('.rss-innerpage-slider-wapp');

  slider.on('init', function(event, slick) {
    if (!slick['$slides'].find('img').length) {
      $(this).find('.slick-slide').css('height', $(window).width() / 2 + 'px');
    }
  });

  if (!slider.hasClass('slick-initialized')) {
    slider.slick({
      fade: true,
      cssEase: 'linear'
    });
  }

  function addSliderCounter() {
    slider.each(function(index, el) {
      var counter = $(this).closest(wrapper);
      var currentSlideNum = counter.find('.js-mob-slider-current-slide')[0];
      var totalSlidesNum = counter.find('.js-mob-slider-total-slides')[0];

      totalSlidesNum.innerText = $(this).slick('getSlick').slideCount;

      $(this).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        currentSlideNum.innerText = nextSlide + 1;
      });
    });
  }

  addSliderCounter();
});
