// HTML
// add contenteditable
// add checkbox input with isDone
// add data-id with id from todo
// render the temp;ate based on todos array items

// EDIT
// listen to p tab event
// listen to onkeydown 'ENTER'
// if modified text is smaller the 2 chars, return
// update title and isEditable property of the currentTodo
// re-render

// DATA STRUCTURE
// create an array for contain all our todos
// make each todo an obj with id, title, isEditable, isDone properties
// push new todo to array

// Still To be done:
// remove todo from array
// clear all todo from todos array
// IS DONE:
// add class to the li based on if isDone or not.
// if isDone: gray out or strike out your todo
// if isDone: update todo.isDone and be sure to re-render it with checkbox checked

// MORE:
// FILTER:
// add 2 button: completed and active
// when click on completed: show just todo with isDone === true
// when click on active: show just todo with isDone === false

const input = document.querySelector('form input[type="text"]');
const form = document.querySelector("form");
const listEL = document.getElementById("myTasks");
const clearCompleted = document.querySelector("[data-clear-completed]");
let todos = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addNewTodo();
  input.value = "";
});

const addNewTodo = () => {
  if (input.value === "") return console.log("cannot be empty");

const newTodo = {
    id: (Date.now() + Math.random()).toString(),
    title: input.value,
    isEditable: true,
    isDone: false
  };

  todos.push(newTodo);
  render();
};

listEL.addEventListener("click", (event) => {
  const clickedItem = event.target;

  if (clickedItem.classList.contains("delete")) {
    deleteItem(clickedItem);
  }

  // if I click on text to edit:
  if (clickedItem.tagName.toLowerCase() === "p") {
    clickedItem.onkeydown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        const newText = clickedItem.textContent;

        // if the new text I write is less then 2 char
        // don't modify it --> DOESN'T WORK ANYMORE
        if (clickedItem.textContent.trim().length < 2) {
          return alert("Todo item cannot be empty or less then two chars.");
        }

        // find data-id from clicked html item
        const clickedItemId = clickedItem.parentElement.dataset.id;
        // find current todo obj based on id
        const currTodo = todos.find((todo) => clickedItemId === todo.id);
        // update clicked todo title with edited text
        currTodo.title = newText;
        // update isEditable property for our curent todo Item
        // contenteditable=false
        currTodo.isEditable = false;
        render();
      }
    };
  }
});

const deleteItem = (clickedItem) => {
  const clickedItemId = clickedItem.parentElement.dataset.id;
  todos = todos.filter((todo, index) => {
    return todo.id !== clickedItemId;
  });

  render();
};


function render() {
  // we rerender all out list and items
  // todo so, we need to clear all our items first
  clearElements();

todos.forEach((todo) => {
    // if isDone=true, icontenteditable = false
    // if isDone=false, icontenteditable = true
  const template = `
    <li data-id=${todo.id}>
    <input type='checkbox' checkbox=${todo.isDone} />
    <p contenteditable=true>
      ${todo.title}
    </p>
    <button class="delete">delete</button>
    </li>
    `;
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
    listEL.insertAdjacentHTML("beforeend", template);
  });
}

function clearElements() {
  listEL.innerHTML = "";
};


clearCompleted.onclick = () => {
  clearAllElements();
};

function clearAllElements () {
  todos.length = 0;
  listEL.innerHTML = "";
}
