/* -------------------------------------------------------------------------- */
/*                                  Libraries                                 */
/* -------------------------------------------------------------------------- */

/* Image carousel */
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/* Popup */
window.showSuccess = () => {
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
const subModal = document.querySelector('.modal_subscribe');
const subForm = subModal.querySelector('.modal__form');
const subModalButton = subModal.querySelector('.modal__button');
const nameInput = subForm.querySelector('#name-input');
const emailInput = subForm.querySelector('#email-input');
const subButton = document.querySelector('.news__newsletter-button');
const subModalCloseButton = subModal.querySelector('.modal__close');

/* Functions */
function handlePressEscape(evt) {
  if (evt.key === 'Escape') {
    closeModal(document.querySelector('.modal_open'));
  }
}

function openModal(modal) {
  modal.classList.add('modal_open');
  subModalButton.classList.add('modal__button_inactive');
  subModalButton.disabled = true;
  document.addEventListener('keydown', handlePressEscape);
}

function closeModal(modal) {
  modal.classList.remove('modal_open');
  document.removeEventListener('keydown', handlePressEscape);
}

function subFormSubmitHandler(evt) {
  evt.preventDefault();
  closeModal(subModal);
  nameInput.value = '';
  emailInput.value = '';
  showSuccess();
}

/* Event Listeners */
subForm.addEventListener('submit', subFormSubmitHandler);

subButton.addEventListener('click', () => {
  openModal(subModal);
});

subModalCloseButton.addEventListener('click', () =>
  closeModal(subModal),
);

subModal.addEventListener('mousedown', (evt) => {
  if (evt.target === subModal) {
    closeModal(subModal);
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
