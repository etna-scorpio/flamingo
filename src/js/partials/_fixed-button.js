var fixedButtonCircle = document.querySelector('.js-fixed-button-circle'),
  fixedButtonParent = fixedButtonCircle.closest('.js-fixed-button'),
  activeClass = 'is-open';

function toggleCircleVisibility() {
  fixedButtonParent.classList.toggle(activeClass);
}

function hideCircle(e) {
  console.log(e.target.closest('.js-fixed-button') === fixedButtonParent);
  if (e.target.closest('.js-fixed-button') !== fixedButtonParent) {
    fixedButtonParent.classList.remove(activeClass);
  }
}

if (fixedButtonParent) {
  fixedButtonCircle.addEventListener('click', toggleCircleVisibility);
}

window.addEventListener('click', (e) => hideCircle(e));
