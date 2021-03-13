import $ from 'jquery';
import 'slick-carousel';

var slider = $('.js-overlay-slider'),
  navForSlider = $('.js-overlay-slider-nav'),
  wrapper = $('.js-overlay-slider-wrapper'),
  showSliderBtn = $('.js-show-overlay-slider'),
  hideSliderBtn = $('.js-overlay-slider-close'),
  activeClass = 'is-visible',
  path,
  images;

window.addEventListener('DOMContentLoaded', function() {

  function addImagesToSlider(arr) {
    var slideNum;

    arr.each(function(index, el) {
      let image = `<div class="overlay-slider__bl">${el.outerHTML}</div>`;
      let thumb = `<div class="overlay-slider-nav__bl">
          <div class="overlay-slider-nav__el">
            ${el.outerHTML}
          </div>
        </div>`;
      slider.append(image);
      navForSlider.append(thumb);

      if ($(el).attr('src') === path) {
        slideNum = index;
      }
    });

    slider.slick({
      fade: true,
      cssEase: 'linear',
      asNavFor: '.js-overlay-slider-nav'
    });

    navForSlider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.js-overlay-slider',
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      infinite: true
    });

    slider.slick('slickGoTo', slideNum);
    navForSlider.slick('slickGoTo', slideNum);
  }

  function removeImagesFromSlider() {
    slider.empty();
    navForSlider.empty();
  }

  function showSlider() {
    path = $(this).find('img').attr('src');
    images = $(this).closest('.js-collage').find('.collage__row img');

    $('body').css('overflow', 'hidden');
    wrapper.addClass(activeClass);

    addImagesToSlider(images);
  }

  function hideSlider() {
    $('body').removeAttr('style');
    wrapper.removeClass(activeClass);
    slider.slick('unslick');
    navForSlider.slick('unslick');
    removeImagesFromSlider();
  }

  showSliderBtn.click(showSlider);
  hideSliderBtn.click(hideSlider);
  $(document).keyup(function(e) {
    if (e.keyCode === 27) hideSlider();
  });

});
