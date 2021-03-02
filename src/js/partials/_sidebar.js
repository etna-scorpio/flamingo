import $ from 'jquery';

var sidebarLink = $('.js-sidebar-link'),
  section,
  headerHeight = $('.js-header').outerHeight(),
  spacing = 50;

function scrollToSection(e) {
  e.preventDefault();

  sidebarLink.removeClass('is-active');
  $(this).addClass('is-active');

  section = $(this).attr('href');

  $('html, body').animate({
    scrollTop: $(section).offset().top - headerHeight - spacing
  });
};

sidebarLink.click(scrollToSection);

