const form = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};
const fillFormFields = () => {
  try {
    const formDataFromLS = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    if (!formDataFromLS) {
      return;
    }
    formData = formDataFromLS;
    console.log(formDataFromLS);
    for (const key in formDataFromLS) {
      form.elements[key].value = formDataFromLS[key];
    }
  } catch (err) {
    console.log(err);
  }
};

fillFormFields();

const FormInputFields = event => {
  const { target: formFieldEl } = event;
  const fieldName = formFieldEl.name;
  const fieldValue = formFieldEl.value.trim();
  formData[fieldName] = fieldValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const formSubmit = event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  localStorage.removeItem(localStorageKey);
  formData = { email: '', message: '' };
  form.reset();
};
form.addEventListener('input', FormInputFields);
form.addEventListener('submit', formSubmit);
