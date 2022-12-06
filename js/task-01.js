const categories = document.getElementsByClassName("item");

console.log("Number of categories:", categories.length);

for (let i = 0; i < categories.length; i++) {
  console.log("Category:", categories[i].children[0].innerHTML);
  console.log("Elements:", categories[i].children[1].children.length);
}
