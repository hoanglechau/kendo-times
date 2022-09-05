/* -------------------------------------------------------------------------- */
/*                                  Libraries                                 */
/* -------------------------------------------------------------------------- */

// The code for these two JavaScript libraries was adapted and edited from their documentation

/* Using the "Swiper" library for the image carousel */
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/* Using the "SweetAlert2" library for the subscription confirmation modal */
window.showSuccess = () => {
  Swal.fire({
    icon: 'success',
    title: 'You have been added to our newsletter',
    showConfirmButton: false,
  });
};

// Adopted and edited code ends here. All the code from this point on was written by me

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

// This function lets users close the modal by hitting the "Escape" key on the keyboard
function handlePressEscape(evt) {
  if (evt.key === 'Escape') {
    closeModal(document.querySelector('.modal_open'));
  }
}

/* When the subscription modal is opened, the "Subscribe" button will be disabled by default.
It will only be enabled after the users have entered acceptable input for both the "Name" and the
"Email" input fields */
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

/* When the form is submitted after the users click on the "Subscribe" button, the values
of the two input fields will be reset, and the confirmation modal (created using the SweetAlert2 library)
will be opened by calling the function showSuccess() */
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

// This allows the users to close the modal by clicking outside the modal
subModal.addEventListener('mousedown', (evt) => {
  if (evt.target === subModal) {
    closeModal(subModal);
  }
});

/* -------------------------------------------------------------------------- */
/*                             Form Validation                                */
/* -------------------------------------------------------------------------- */

const isValid = (inputEl) => inputEl.validity.valid;

// This function checks the validity of the form input
const checkInputValidity = (formEl, inputEl, settings) => {
  const errorEl = formEl.querySelector(`#${inputEl.id}-error`);

  if (!isValid(inputEl)) {
    // If there is an error in the input field, the bottom border's color is changed to red, and the red error message becomes visible under the input field
    inputEl.classList.add(settings.inputErrorClass);
    console.log(formEl);
    console.log(inputEl);
    console.log(errorEl);
    errorEl.textContent = inputEl.validationMessage;
    errorEl.classList.add(settings.errorClass);
  } else {
    // After making an error, if the users change the input to something acceptable, the red bottom border and the red error message will be removed
    inputEl.classList.remove(settings.inputErrorClass);
    console.log(inputEl);
    console.log(errorEl);
    errorEl.textContent = '';
    errorEl.classList.remove(settings.errorClass);
  }
};

/* This function makes the "Subscribe" button become active when the users have entered acceptable
  input, and makes the button become inactive if there is an error with the user input */
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

// This function sets up the event listeners of the input fields
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

// This function enables Form Validation for the form in the subscription modal
const enableValidation = ({ formSelector, ...otherSettings }) => {
  const formList = [...document.querySelectorAll(formSelector)];
  formList.forEach((formEl) => {
    formEl.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setupEventListeners(formEl, otherSettings);
  });
};

// Validation settings, containing the selectors required for Form Validation
enableValidation({
  formSelector: '.modal__form',
  inputSelector: '.modal__input',
  submitButtonSelector: '.modal__button',
  inactiveButtonClass: 'modal__button_inactive',
  inputErrorClass: 'modal__input_type_error',
  errorClass: 'modal__error_visible',
});
