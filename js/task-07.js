const input = document.getElementById("font-size-control");
const spanElement = document.getElementById("text");

//initial fontSize
spanElement.style.fontSize = input.value + "px";

const updatingFontSize = () => {
  let fontSize = input.value;
  spanElement.style.fontSize = fontSize + "px";
};

input.addEventListener("input", updatingFontSize);
