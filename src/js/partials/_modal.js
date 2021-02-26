var modal = document.querySelector('.js-modal'),
  activeClass = 'is-active',
  closeIcon = modal.querySelector('.js-close-modal'),
  firstScreen = document.querySelector('.js-hero'),
  firstScreenHeight;

function showModal() {
  firstScreenHeight = firstScreen.getBoundingClientRect().height;

  if (window.pageYOffset > firstScreenHeight && !modal.classList.contains(activeClass)) {
    if (sessionStorage.modalClosed !== 'closed') {
      modal.classList.add(activeClass);
    }
  }
};

function closeModal() {
  this.closest('.js-modal').classList.remove(activeClass);
  sessionStorage.modalClosed = 'closed';
}

// function clearStorage() {
//   localStorage.removeItem('modalClosed');
// }

if (modal) {
  window.addEventListener('scroll', showModal);
  closeIcon.addEventListener('click', closeModal);
}


