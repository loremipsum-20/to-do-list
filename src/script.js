// GOAL:
// Create multilple item from input field and display them in a list

// 1_ create new todo on submit
//  1a: grab value from text input: const inputValue = querySelect('#InputText).value
//  1b: listen to submit event and addNewTodo to ul (attaching function to submit event): form.addEventListener('submit', addNewTodo(inputValue))
//  1c: clear input value: inputValue = ''
//  1d: prevent form to submit by default: event.preventDefault();

//const inputValue = document.querySelector('#textInput').value;
//form.addEventListener('submit', addNewTodo)


// 2_ Add new todo to ul
// 2a: create addNewTodo function: const addNewTodo = function() { ... }
// 2b: grab ul element: const listEl = getElementbyId('myTasks)
// 2c: create new todo template: const template = `<li class="todo-item">${inputValue}</li>`
// 3c: add template to ul: listEl.innerHTML += template
//const addNewTodo = function () {
  // TODO: Add new todo
//};


// 2_with instructions from https://medium.com/@suryashakti1999/to-do-list-app-using-javascript-for-absolute-beginners-13ea9e38a033
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
todoButton.addEventListener("click", addTodo)

function addTodo(event) {
    event.preventDefault();
    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //todo LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if(todoInput.value === ""){
        return null
    }

// 3_with instructions from https://www.youtube.com/watch?v=8ogdhvxShe0&ab_channel=CodifyAcademy
//function todoList() {
    //var item = document.getElementById("todoInput").inputValue;
    //var text = document.createTextNode(item);
    //var newItem = document.createElement("li");
    //newItem.appendChild(text);
    //document.getElementById("todoList").appendchild(newItem);
//}
