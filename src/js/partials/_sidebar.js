import $ from 'jquery';

window.addEventListener('DOMContentLoaded', function() {

  if ($('.js-sidebar').length > 0) {

    var sidebar = $('.js-sidebar'),
      sidebarInner = $('.js-sidebar-inner'),
      sidebarInnerHeight = sidebarInner.outerHeight(),
      sidebarList = $('.js-sidebar-list'),
      sidebarLink = sidebarList.find('a'),
      section,
      header = $('.js-header'),
      headerHeight = Math.round(header.outerHeight()),
      spacing = 50,
      windowPoint,
      sidebarTop,
      stopPoint;

    function setActiveNavLink() {
      sidebarLink.first().addClass('is-active');
    }

    function scrollToSection(e) {
      e.preventDefault();

      sidebarLink.removeClass('is-active');
      $(e.currentTarget).addClass('is-active');

      section = $(e.currentTarget).attr('href');

      $('html, body').animate({
        scrollTop: $(section).offset().top - headerHeight - spacing
      });
    };

    sidebarLink.each(function() {
      $(this).click(function(e) { scrollToSection(e); });
    });

    function checkHeaderVisibility() {
      if (header.hasClass('is-desktop-scroll')) {
        headerHeight = header.outerHeight();
      } else {
        headerHeight = 0;
      }
      return headerHeight;
    }

    function moveSidebarOnScroll() {
      windowPoint = window.scrollY + checkHeaderVisibility() + spacing;
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
            .css('top', checkHeaderVisibility() + spacing + 'px');
        }

      } else if (windowPoint < sidebarTop) {
        sidebarInner.removeClass('is-fixed').removeAttr('style');
      }
    }

    setActiveNavLink();
    checkHeaderVisibility();
    moveSidebarOnScroll();

    $(window).scroll(moveSidebarOnScroll);
    $(window).resize(function() {
      checkHeaderVisibility();
      moveSidebarOnScroll();
    });

  }

});
