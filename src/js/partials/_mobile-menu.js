var menuBtn = document.querySelector('.js-menu-btn'),
  menu = document.querySelector('.js-header-menu');

menuBtn.addEventListener('click', function toggleMobileMenu() {
  menu.classList.toggle('is-active');
});


window.addEventListener('click', function closeMobileMenu(e) {
  if (e.target.closest('button') !== menuBtn && e.target.closest('div') !== menu) {
    menu.classList.remove('is-active');
  }
});
