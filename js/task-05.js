let textInput = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

const updateName = () => {
  if (!textInput.value) {
    nameOutput.innerHTML = "Anonymous";
  }
};

textInput.addEventListener("keyup", () => {
  nameOutput.innerHTML = textInput.value;
});

textInput.addEventListener("blur", updateName);
