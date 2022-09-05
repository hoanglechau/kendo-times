/* -------------------------------------------------------------------------- */
/*                                  Libraries                                 */
/* -------------------------------------------------------------------------- */

// The code here was adapted and edited from the documentation of the "AOS" JavaScript library in order to set up the fade-in scrolling effect

AOS.init();

// Adopted and edited code ends here. All the code from this point on was written by me

/* -------------------------------------------------------------------------- */
/*                                  Selectors                                 */
/* -------------------------------------------------------------------------- */

const previewModal = document.querySelector('.modal_preview');
const previewImage = document.querySelector('.modal__preview-image');
const previewImageTitle = document.querySelector(
  '.modal__preview-image-title',
);
const previewModalCloseButton =
  previewModal.querySelector('.modal__close');
const imageList = document.querySelectorAll('.gear__image');

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

// This function lets users close the modal by hitting the "Escape" key on the keyboard
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
    // Set the src and alt attributes of the image in the modal to be those of the image that the users clicked on
    previewImage.src = imageEl.src;
    previewImage.alt = imageEl.alt;
    // Set the preview image caption to be the same as the alt text of the image that was clicked on
    previewImageTitle.textContent = imageEl.alt;
    openModal(previewModal);
  });
});

previewModalCloseButton.addEventListener('click', () =>
  closeModal(previewModal),
);

// This allows the users to close the modal by clicking outside the modal
previewModal.addEventListener('mousedown', (evt) => {
  if (evt.target === previewModal) {
    closeModal(previewModal);
  }
});
