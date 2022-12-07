let input = document.getElementById("validation-input");

const validateInputLength = () => {
  input.classList.add("invalid");

  if (input.value.length >= input.dataset.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  }
};

input.addEventListener("blur", validateInputLength);
