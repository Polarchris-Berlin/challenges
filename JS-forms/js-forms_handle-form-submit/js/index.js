console.clear();

const form = document.querySelector('[data-js="form"]');
const FirstNameInput = document.getElementById("first-name");
const LastNameInput = document.getElementById("last-name");
const AgeInput = document.getElementById("age");
const EmailInput = document.getElementById("email");
const ComplaintTypeInput = document.getElementById("complaint");
const ComplaintDetailsInput = document.getElementById("details");
const BadnessRatingInput = document.getElementById("badness");
const OrderDateInput = document.getElementById("order-date");
const TosInput = document.getElementById("tos");

window.addEventListener("DOMContentLoaded", () => {
  FirstNameInput.focus();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const validateInputs = () => {
  const FirstName = FirstNameInput.value.trim();
  const LastName = LastNameInput.value.trim();
  const Age = parseInt(AgeInput.value.trim());
  const Email = EmailInput.value.trim();
  const ComplaintType = ComplaintTypeInput.value.trim();
  const ComplaintDetails = ComplaintDetailsInput.value.trim();
  const BadnessRating = parseInt(BadnessRatingInput.value, 10);
  const OrderDate = OrderDateInput.value;
  const TOS = TosInput.checked;

  if (
    !FirstName ||
    !LastName ||
    !Email ||
    !ComplaintType ||
    !OrderDate ||
    !TOS
  ) {
    alert(
      "Please enter your First Name, Last Name, Email, What is wrong? and your order date before you proceed. We also need you to accept our terms of service. Thank you!"
    );
    return;
  }

  console.log({
    FirstName,
    LastName,
    Age,
    Email,
    ComplaintType,
    ComplaintDetails,
    BadnessRating,
    OrderDate,
    TOS,
  });

  form.reset();
  setTimeout(() => {
    FirstNameInput.focus();
  }, 0);
};
