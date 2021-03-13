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
  const template = `<li class="todoInput">${input.value}</li>`;
  listEL.innerHTML += template;
};


// 3_ Add delete function
// 3a: add HTML element to template (could be a button/icon)
// 3b: Listen to click event on the whole listEL to delete
// 3c: delete item listEL.removeChild // https://www.w3schools.com/jsref/met_node_removechild.asp
  // hint: use event object for delete function
  // const deleteItem = (event) => {
  // use the "event" object to find out which li item specifically you need to remove
  // TIP: console.log(event) and console.log(event.target) or event.currentTarget
//}

// 1_ Delete
// Add html element "delete" to the li template
// Listen to the click event on the delete element
// check if the clicked item is the delete element: https://codetogo.io/how-to-check-if-element-has-class-in-javascript/
// delete item:
// listEl.removeChild() // https://www.w3schools.com/jsref/met_node_removechild.asp
// find parent element https://www.w3schools.com/jsref/prop_node_parentelement.asp

//listEL.addEventListener("click", (event) => {
  //console.log(event.target);
  //const clickedEl = event.target;

  // check if the clickedEl contain the delete element
  // if(event.target === #deleteItem) {}
  // https://codetogo.io/how-to-check-if-element-has-class-in-javascript/
  // if is the delete element, then call the deleteElement()

  // edit

  // check/uncheck out item
//});

//const deleteElement = (targetItem) => {
  // remove targetItem from listEl
  // listEl.removeChild() // https://www.w3schools.com/jsref/met_node_removechild.asp
  // find parent element https://www.w3schools.com/jsref/prop_node_parentelement.asp
//};


// 4_ Clear all button
// 4a: add HTML element to clear all to our todo header
// 4b: listen to the click event of clear all element
  // remove all li eelement on document
  // clear out content of ul list

  const clearAll = document.getElementById('clearAll');
  clearAll.addEventListener('click', () => {
    listEL.innerHTML = '';
  });



// 5_ Edit item
