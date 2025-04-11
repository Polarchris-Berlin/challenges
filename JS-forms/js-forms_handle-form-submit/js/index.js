console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", function getFormContent(event) {
  console.log(event);
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  event.target.reset();
  event.target.elements.firstName.focus();
});
