// GOAL:
// Create multilple item from input field and display them in a list

// 1_ create new todo on submit
//  1a: grab value from text input: const inputValue = querySelect('#InputText).value
//  1b: listen to submit event and addNewTodo to ul (attaching function to submit event): form.addEventListener('submit', addNewTodo(inputValue))
//  1c: clear input value: inputValue = ''
//  1d: prevent form to submit by default: event.preventDefault();

const input = document.querySelector('form input[type="text"]');
const form = document.querySelector("form");
const listEL = document.getElementById("myTasks"); //defined outside, can be used everywhere

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addNewTodo();
  input.value = '';
})

// 2_ Add new todo to ul
// 2a: create addNewTodo function: const addNewTodo = function() { ... }
// 2b: grab ul element: const listEl = getElementbyId('myTasks)
// 2c: create new todo template: const template = `<li class="todo-item">${inputValue}</li>`
// 3c: add template to ul: listEl.innerHTML += template

const addNewTodo = () => {
  const template = `<li class="todoInput">${input.value}<span class='delete'>X</span></li>`;
  listEL.innerHTML += template;
};

// 3_ Delete
// 3a: add HTML element to template (could be a button/icon)
// 3b: Listen to the click event on the delete element
// 3c: check if the clicked item is the delete element: https://codetogo.io/how-to-check-if-element-has-class-in-javascript/ -> test via console log before calling the function
// 3d: delete item:
    // listEl.removeChild() // https://www.w3schools.com/jsref/met_node_removechild.asp
    // find parent element https://www.w3schools.com/jsref/prop_node_parentelement.asp

listEL.addEventListener("click", (event) => {
  console.log(event.target);
  const clickedEl = event.target;
  if (clickedEl.classList.contains("delete")) {
    deleteElement(clickedEl);
  }
});

const deleteElement = (targetItem) => {
  listEL.removeChild(targetItem.parentElement);
};

// 4_ Clear all button
// 4a: add HTML element to clear all to our todo header
// 4b: listen to the click event of clear all element
  // remove all li eelement on document
  // clear out content of ul list

  const clearAll = document.getElementById("clearAll");
  clearAll.addEventListener('click', () => {
    listEL.innerHTML = '';
  });


// 5_ Edit item
