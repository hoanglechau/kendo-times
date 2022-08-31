/* -------------------------------------------------------------------------- */
/*                                  Libraries                                 */
/* -------------------------------------------------------------------------- */

/* Image carousel */
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

/* Popup */
window.showExample = () => {
  Swal.fire({
    icon: 'success',
    title: 'You have been added to our newsletter',
    showConfirmButton: false,
  });
};

/* -------------------------------------------------------------------------- */
/*                          Subscription Form Modal                           */
/* -------------------------------------------------------------------------- */

/* Selectors */
const editModal = document.querySelector('.modal_type_edit');
const editForm = editModal.querySelector('.modal__form');
const nameInput = document.querySelector('#name-input');
const aboutInput = document.querySelector('#about-input');
const editModalButton = document.querySelector('.news__form-button');
const editModalCloseButton = editModal.querySelector('.modal__close');

/* Functions */
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

function preFillEditForm() {
  if (!editModal.classList.contains('modal_open')) {
    nameInput.value = 'Hoang';
    aboutInput.value = 'Software Engineer';
  }
}

function editFormSubmitHandler(evt) {
  evt.preventDefault();

  showExample();

  closeModal(editModal);
}

/* Event Listeners */
editForm.addEventListener('submit', editFormSubmitHandler);

editModalButton.addEventListener('click', () => {
  preFillEditForm();
  openModal(editModal);
});

editModalCloseButton.addEventListener('click', () =>
  closeModal(editModal),
);

editModal.addEventListener('mousedown', (evt) => {
  if (evt.target === editModal) {
    closeModal(editModal);
  }
});

/* -------------------------------------------------------------------------- */
/*                             Form Validation                                */
/* -------------------------------------------------------------------------- */

const isValid = (inputEl) => inputEl.validity.valid;

const checkInputValidity = (formEl, inputEl, settings) => {
  const errorEl = formEl.querySelector(`#${inputEl.id}-error`);

  if (!isValid(inputEl)) {
    inputEl.classList.add(settings.inputErrorClass);
    console.log(formEl);
    console.log(inputEl);
    console.log(errorEl);
    errorEl.textContent = inputEl.validationMessage;
    errorEl.classList.add(settings.errorClass);
  } else {
    inputEl.classList.remove(settings.inputErrorClass);
    console.log(inputEl);
    console.log(errorEl);
    errorEl.textContent = '';
    errorEl.classList.remove(settings.errorClass);
  }
};

const toggleButtonState = (
  inputList,
  buttonEl,
  { inactiveButtonClass },
) => {
  const allValid = inputList.every((inputEl) => isValid(inputEl));
  if (allValid) {
    buttonEl.classList.remove(inactiveButtonClass);
    buttonEl.disabled = false;
  } else {
    buttonEl.classList.add(inactiveButtonClass);
    buttonEl.disabled = true;
  }
};

const setupEventListeners = (
  formEl,
  { inputSelector, submitButtonSelector, ...otherSettings },
) => {
  const inputList = [...formEl.querySelectorAll(inputSelector)];
  const buttonEl = formEl.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonEl, otherSettings);

  inputList.forEach((inputEl) => {
    inputEl.addEventListener('input', (evt) => {
      checkInputValidity(formEl, inputEl, otherSettings);
      toggleButtonState(inputList, buttonEl, otherSettings);
    });
  });
};

const enableValidation = ({ formSelector, ...otherSettings }) => {
  const formList = [...document.querySelectorAll(formSelector)];
  formList.forEach((formEl) => {
    formEl.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setupEventListeners(formEl, otherSettings);
  });
};

enableValidation({
  formSelector: '.modal__form',
  inputSelector: '.modal__input',
  submitButtonSelector: '.modal__button',
  inactiveButtonClass: 'modal__button_inactive',
  inputErrorClass: 'modal__input_type_error',
  errorClass: 'modal__error_visible',
});
