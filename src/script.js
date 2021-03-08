// GOAL:
// Create multilple item from input field and display them in a list

// 1_ create new todo on submit
//  1a: grab value from text input: const inputValue = querySelect('#InputText).value
//  1b: listen to submit event and addNewTodo to ul (attaching function to submit event): form.addEventListener('submit', addNewTodo(inputValue))
//  1c: clear input value: inputValue = ''
//  1d: prevent form to submit by default: event.preventDefault();

let inputValue = document.querySelector('#textInput');
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  addNewTodo();
  inputValue.value = '';
})


// 2_ Add new todo to ul
// 2a: create addNewTodo function: const addNewTodo = function() { ... }
// 2b: grab ul element: const listEl = getElementbyId('myTasks)
// 2c: create new todo template: const template = `<li class="todo-item">${inputValue}</li>`
// 3c: add template to ul: listEl.innerHTML += template

const addNewTodo = function () {
  const listEL = document.getElementById("myTasks");
  const template = `<li class="todoInput">${inputValue.value}</li>`;
  listEL.innerHTML += template;
};
