let todo = "";

const todoField = document.querySelector("#theTodo");
const list = document.querySelector("#todoList");

document.querySelector('#todoForm').addEventListener("submit", function(event) {
    event.preventDefault();
    todo = todoField.value;
    const tag = document.createElement("li");
    tag.textContent = todo;
    list.appendChild(tag);
});