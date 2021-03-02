import $ from 'jquery';

var collapse = $('.js-collapse'),
  collapseBar = collapse.children('.js-collapse-bar'),
  collapseContent = collapse.children('.js-collapse-content');

collapseBar.click(function() {
  $(this).parent().toggleClass('is-open');
  $(this).siblings().slideToggle('fast');
});
