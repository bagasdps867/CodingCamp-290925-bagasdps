// Ambil elemen
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoDate = document.getElementById("todo-date");
const todoList = document.getElementById("todo-list");
const filter = document.getElementById("filter");

// Event: Tambah To-Do
todoForm.addEventListener("submit", addTodo);

// Event: Filter
filter.addEventListener("change", filterTodos);

// Fungsi tambah To-Do
function addTodo(e) {
  e.preventDefault();

  if (todoInput.value.trim() === "" || todoDate.value === "") {
    alert("Please fill in both fields!");
    return;
  }

  // Buat elemen li
  const todoDiv = document.createElement("li");
  todoDiv.classList.add("todo-item");

  // Teks To-Do
  const todoText = document.createElement("span");
  todoText.innerText = `${todoInput.value} (Due: ${todoDate.value})`;
  todoDiv.appendChild(todoText);

  // Tombol
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("todo-buttons");

  const completeBtn = document.createElement("button");
  completeBtn.innerText = "Complete";
  completeBtn.classList.add("complete-btn");
  completeBtn.addEventListener("click", () => {
    todoDiv.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    todoDiv.remove();
  });

  buttonDiv.appendChild(completeBtn);
  buttonDiv.appendChild(deleteBtn);

  todoDiv.appendChild(buttonDiv);

  // Tambahkan ke list
  todoList.appendChild(todoDiv);

  // Reset form
  todoForm.reset();
}

// Fungsi filter
function filterTodos() {
  const todos = todoList.childNodes;
  todos.forEach(todo => {
    if (todo.nodeType === 1) { // hanya elemen li
      switch (filter.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          todo.classList.contains("completed") ? todo.style.display = "flex" : todo.style.display = "none";
          break;
        case "uncompleted":
          !todo.classList.contains("completed") ? todo.style.display = "flex" : todo.style.display = "none";
          break;
      }
    }
  });
}