import $ from 'jquery';
import Inputmask from './inputmask';

window.addEventListener('DOMContentLoaded', function() {
  var selector = $('.js-tel');

  var im = new Inputmask('+38 (999) 999-99-99');
  im.mask(selector);

});
