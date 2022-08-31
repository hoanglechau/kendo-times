/* -------------------------------------------------------------------------- */
/*                                  Libraries                                 */
/* -------------------------------------------------------------------------- */

AOS.init();

/* -------------------------------------------------------------------------- */
/*                                  Selectors                                 */
/* -------------------------------------------------------------------------- */

const previewModal = document.querySelector('.modal_type_preview');
const previewImage = document.querySelector('.modal__preview-image');
const previewImageTitle = document.querySelector(
  '.modal__card-title',
);
const previewModalCloseButton =
  previewModal.querySelector('.modal__close');
const imageList = document.querySelectorAll('.gear__image');

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function handlePressEscape(evt) {
  if (evt.key === 'Escape') {
    closeModal(document.querySelector('.modal_open'));
  }
}

function openModal(modal) {
  modal.classList.add('modal_open');
  document.addEventListener('keydown', handlePressEscape);
}

function closeModal(modal) {
  modal.classList.remove('modal_open');
  document.removeEventListener('keydown', handlePressEscape);
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

imageList.forEach((imageEl) => {
  imageEl.addEventListener('click', function () {
    previewImage.src = imageEl.src;
    previewImage.alt = imageEl.alt;
    previewImageTitle.textContent = imageEl.alt;
    openModal(previewModal);
  });
});

previewModalCloseButton.addEventListener('click', () =>
  closeModal(previewModal),
);

previewModal.addEventListener('mousedown', (evt) => {
  if (evt.target === previewModal) {
    closeModal(previewModal);
  }
});
