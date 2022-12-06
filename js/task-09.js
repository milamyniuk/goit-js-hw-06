const button = document.querySelector(".change-color");
const spanText = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
button.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  spanText.innerHTML = getRandomHexColor();
});
