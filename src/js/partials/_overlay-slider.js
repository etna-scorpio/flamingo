import $ from 'jquery';
import 'slick-carousel';

var slider = $('.js-overlay-slider'),
  navForSlider = $('.js-overlay-slider-nav'),
  wrapper = $('.js-overlay-slider-wrapper'),
  showSliderBtn = $('.js-show-overlay-slider'),
  hideSliderBtn = $('.js-overlay-slider-close'),
  activeClass = 'is-visible',
  images;

window.addEventListener('DOMContentLoaded', function() {

  function addImagesToSlider(arr) {
    arr.each(function(index, el) {
      let image = `<div class="overlay-slider__bl">${el.outerHTML}</div>`;
      let thumb = `<div class="overlay-slider-nav__bl">
          <div class="overlay-slider-nav__el">
            ${el.outerHTML}
          </div>
        </div>`;
      slider.append(image);
      navForSlider.append(thumb);
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
  }

  function removeImagesFromSlider() {
    slider.empty();
    navForSlider.empty();
  }

  function showSlider() {
    $('body').css('overflow', 'hidden');
    wrapper.addClass(activeClass);
    images = $(this).closest('.js-collage').find('.collage__row img');

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


});
