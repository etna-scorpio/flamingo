window.addEventListener('DOMContentLoaded', function() {

  if (document.querySelector('.js-popup-contact-form')) {

    var modal = document.querySelector('.js-popup-contact-form'),
      activeClass = 'is-active',
      closeIcon = modal.querySelector('.js-close-popup-contact-form'),
      showBtn = document.querySelectorAll('.js-show-popup-contact-form');

    function showModal() {
      // hide tour modal if it's visible
      if ($('.js-modal').hasClass(activeClass)) {
        $('.js-modal').removeClass(activeClass);
      }
      modal.classList.add(activeClass);
    };

    function closeModal() {
      this.closest('.js-popup-contact-form').classList.remove(activeClass);
    }

    if (showBtn.length) {
      showBtn.forEach(function(elem) {
        elem.addEventListener('click', function(e) {
          e.preventDefault();
          showModal();
        });
      });
    }
    closeIcon.addEventListener('click', closeModal);
  }

});
