let input = document.getElementById("validation-input");

const validateInputLength = () => {
  input.classList.remove("invalid", "valid");

  if (input.value.length === +input.dataset.length) {
    input.classList.add("valid");
    return;
  }
  input.classList.add("invalid");
};

input.addEventListener("blur", validateInputLength);
