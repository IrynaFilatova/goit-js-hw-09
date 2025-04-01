const form = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};
const getFormData = () => {
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

getFormData();

const inputHandler = event => {
  const { target: inputField } = event;
  const fieldName = inputField.name;
  const fieldValue = inputField.value.trim();
  formData[fieldName] = fieldValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const submitHandler = event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  form.reset();
};
form.addEventListener('input', inputHandler);
form.addEventListener('submit', submitHandler);
