document.addEventListener("DOMContentLoaded", function () {
  const db = new Dexie("todoDB");
  db.version(1).stores({ todos: "++id,task,desc" });

  const todoForm = document.getElementById("todoForm");
  const todoInput = document.getElementById("todoInput");
  const todoDesc = document.getElementById("todoDesc");
  const todoList = document.getElementById("todoList");
  const del = document.getElementById("del");

  function addTodo() {
    db.todos
      .add({ task: todoInput.value, desc: todoDesc.value })
      .then(displayTodos);
    todoInput.value = "";
    todoDesc.value = "";
  }

  function displayTodos() {
    db.todos.toArray().then((todos) => {
      todos.forEach((todo) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${todo.task},${todo.desc}`;
        todoList.appendChild(listItem);
      });
    });
  }

  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addTodo();
  });

  // Initial display
  displayTodos();

  FIXME;
  del.addEventListener("click", () => {
    db.todos.delete();
  });
});
