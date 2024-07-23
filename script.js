let taskInput;
let toDolistItems = document.getElementById("list-items");
let num = 0;
let listOfTasks = [];

function displayList() {
  let taskInput = document.getElementById("task-input-area");
  if (
    taskInput.value.trim() != "" &&
    !listOfTasks.includes(taskInput.value.trim())
  ) {
    listOfTasks.push(taskInput.value.trim());
    toDolistItems.appendChild(createTodoItem(taskInput.value.trim()));
    taskInput.value = "";
    num += 1;
  } else if (listOfTasks.includes(taskInput.value.trim())) {
    window.alert("Task already exists in the list!");
    taskInput.value = "";
  } else {
    window.alert("Enter a task!");
    taskInput.value = "";
  }
}

toDolistItems.addEventListener("click", (e) => {
  if (e.target.classList.contains("todo-item")) {
    e.target.classList.toggle("strike");
  }
});

const createTodoItem = (value) => {
  let newlist = document.createElement("li");
  let words = value
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
  newlist.classList.add("todo-item");
  let individualItemId = "Item" + num;
  newlist.setAttribute("id", individualItemId);
  let removeButton = document.createElement("button");
  removeButton.setAttribute("class", "deleteButton");
  removeButton.innerHTML = "Remove";
  removeButton.onclick = function () {
    removeDiv(individualItemId);
  };
  newlist.textContent = words;
  newlist.appendChild(removeButton);
  return newlist;
};

function removeDiv(individualItemId) {
  let toDolistItems = document.getElementById("list-items");
  let particularItem = document.getElementById(individualItemId);
  console.log(particularItem.textContent);
  toDolistItems.removeChild(particularItem);
  let words = particularItem.textContent
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toLowerCase() + s.substring(1))
    .join(" ");
  console.log(words);
  listOfTasks = listOfTasks.filter(
    (item) => item !== words.replace("remove", "")
  );
  console.log(listOfTasks);
}
