import $ from 'jquery';

var sidebar = $('.js-sidebar'),
  sidebarInner = $('.js-sidebar-inner'),
  sidebarInnerHeight = sidebarInner.outerHeight(),
  sidebarLink = $('.js-sidebar-link'),
  section,
  header = $('.js-header'),
  headerHeight = Math.round(header.outerHeight()),
  spacing = 50,
  windowPoint,
  sidebarTop,
  stopPoint;

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

function checkHeaderVisibility() {
  if (header.hasClass('is-desktop-scroll')) {
    return header.outerHeight();
  }
}

function moveSidebarOnScroll() {
  if (checkHeaderVisibility()) {
    headerHeight = checkHeaderVisibility();
  } else {
    headerHeight = 0;
  }

  // console.log(headerHeight);
  windowPoint = window.scrollY + headerHeight + spacing;
  sidebarTop = sidebar.offset().top,
  stopPoint = sidebarTop + sidebar.outerHeight();

  if (windowPoint > sidebarTop) {

    if (windowPoint + sidebarInnerHeight > stopPoint) {
      sidebarInner
        .removeClass('is-fixed')
        .addClass('is-absolute')
        .css('top', stopPoint - sidebarInnerHeight + 'px');
    } else {
      sidebarInner
        .removeClass('is-absolute')
        .addClass('is-fixed')
        .css('top', headerHeight + spacing + 'px');
    }

  } else if (windowPoint < sidebarTop) {
    sidebarInner.removeClass('is-fixed').removeAttr('style');
  }
}

$(document).ready(function() {
  checkHeaderVisibility();
  moveSidebarOnScroll;
});
$(window).scroll(moveSidebarOnScroll);

