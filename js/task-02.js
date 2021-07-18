const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredient = document.querySelector('#ingredients');
const ingredientList = ingredients.reduce((string, item) => string + `<li>${(item)}</li>`, "");
ingredient.innerHTML = ingredientList;


