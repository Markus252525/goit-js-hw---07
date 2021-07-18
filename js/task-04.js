const add = document.querySelector("[data-action='decrement']");
const res = document.querySelector("[data-action='increment']");
const counter = document.querySelector('#value');
let count = 0;

add.addEventListener('click', increment);
res.addEventListener('click', decrement);

function decrement(){
  count += 1;
  counter.textContent = count;
}

function increment(){
  count -= 1;
  counter.textContent = count;
}