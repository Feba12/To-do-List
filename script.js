let taskInput;
let list = document.getElementById("list");
let num = 0;
function displayList() {
  let taskInput = document.getElementById("task-input-area");
  if (taskInput.value.trim() != "") {
    list.appendChild(createTodoItem(taskInput.value.trim()));
    taskInput.value = "";
    num += 1;
  }
  else{
    window.alert("Enter a task!");
  }
}

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("todo-item")) {
    e.target.classList.toggle("strike");
  }
});

const createTodoItem = (value) => {
  const div = document.createElement("li");
  const words = value
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
  div.classList.add("todo-item");
  let divName = "Item" + num;
  div.setAttribute("id", divName);
  let removeButton = document.createElement("button");
  removeButton.setAttribute("class", "deleteButton");
  removeButton.innerHTML = "Remove";
  removeButton.onclick = function () {
    removeDiv(divName);
  };
  div.textContent = words;
  div.appendChild(removeButton);
  return div;
};

function removeDiv(divNum) {
  var list = document.getElementById("list");
  var childId = document.getElementById(divNum);
  list.removeChild(childId);
}
