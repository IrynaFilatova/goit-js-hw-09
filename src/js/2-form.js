const formEl = document.querySelector('.feedback-form');
let formData = {};
const getFormData = () => {
  try {
    const formDataFromLS = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    if (!formDataFromLS) {
      return;
    }
    formData = formDataFromLS;
    for (const key in formDataFromLS) {
      formEl.elements[key].value = formDataFromLS[key];
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
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  formEl.reset();
};
formEl.addEventListener('input', inputHandler);
formEl.addEventListener('submit', submitHandler);
