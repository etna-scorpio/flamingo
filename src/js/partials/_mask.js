import $ from 'jquery';
import Inputmask from './inputmask';

var selector = $('.js-tel');

var im = new Inputmask('+38 (999) 999-99-99');
im.mask(selector);
