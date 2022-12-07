const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let ingredientsLi = [];
const ingredientsCatElement = document.getElementById("ingredients");

for (let i = 0; i < ingredients.length; i++) {
  let element = document.createElement("li");
  element.className = "item";
  element.innerText = ingredients[i];
  ingredientsLi.push(element);
}
ingredientsCatElement.append(...ingredientsLi);

// const ingredientsLi = document.getElementById("ingredients");
// const markup = ingredients.map(
//   (ingredient) => `<li class="item">${ingredient}</li>`
// );
// console.log(markup);
// ingredientsLi.innerHTML = markup;
