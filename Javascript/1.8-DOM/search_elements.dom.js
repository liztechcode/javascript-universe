const list = document.body.firstElementChild.children;
console.log(list);
const listArray = Array.from(list);
const text = listArray.forEach(item => console.log(item.textContent));



