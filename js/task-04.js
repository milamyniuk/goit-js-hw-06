let counterValue = 0;
const buttonCounter = document.getElementById("value");

let decrementtButton = document.querySelector(
  'button[data-action="decrement"]'
);
let incrementButton = document.querySelector('button[data-action="increment"]');

const updateCounter = () => {
  buttonCounter.innerHTML = counterValue;
};

decrementtButton.addEventListener("click", () => {
  counterValue--;
  updateCounter();
});

incrementButton.addEventListener("click", () => {
  counterValue++;
  updateCounter();
});
