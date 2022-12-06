const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  const data = new FormData(evt.currentTarget);
  data.forEach((value) => console.log(value));
  const { email, password } = evt.currentTarget.elements;
  console.log("email", email.value);
  console.log("password", password.value);
}
