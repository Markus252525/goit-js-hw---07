const categoriesEl = document.querySelectorAll('.item');
console.log(`В списке ${categoriesEl.length} категории.`);

const categoriesElItem = document.querySelectorAll('#categories > li');
categoriesElItem.forEach(el => {
  console.log(
    `Категория: ${el.querySelector(`h2`).textContent}, Количество элементов: ${el.querySelectorAll(`li`).length}`
  );
});