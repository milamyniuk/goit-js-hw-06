const form = document.querySelector(".login-form");

function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;

  if (email.value.length === 0 || password.value.length === 0) {
    alert("Please fill all fields");
  }
  console.log("email", email.value);
  console.log("password", password.value);
  form.reset();
}

form.addEventListener("submit", onSubmit);
