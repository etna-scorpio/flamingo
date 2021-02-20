var header = document.getElementsByClassName('js-header')[0],
  headerHeight,
  headerTop,
  desktop,
  mobile,
  activeClass = 'is-desktop-scroll';

var switchHeader = function() {
  headerHeight = header.getBoundingClientRect().height;
  headerTop = header.getBoundingClientRect().y;
  desktop = document.documentElement.clientWidth > 1024;
  mobile = document.documentElement.clientWidth < 1024;

  if (desktop) {
    // console.log('desktop');
    if (window.pageYOffset > headerTop + headerHeight * 3) {
      header.classList.add(activeClass);
    } else if (window.pageYOffset === 0 && header.classList.contains(activeClass)) {
      header.classList.remove(activeClass);
    }
  } else if (mobile && header.classList.contains(activeClass)) {
    // console.log('mobile');
    header.classList.remove(activeClass);
  }
};

window.addEventListener('load', function() {
  switchHeader();
});

window.addEventListener('scroll', function() {
  switchHeader();
});

window.addEventListener('resize', function() {
  switchHeader();
});

