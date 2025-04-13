const input_item = document.getElementById("input-box");
const list_container = document.getElementById("list-container");
function addTask() {
  if (input_item.value === "") {
    alert("you must wright some text");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input_item.value;
    list_container.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input_item.value = "";
  saveData();
}

list_container.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("list-item");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", list_container.innerHTML);
}
function showList() {
  list_container.innerHTML = localStorage.getItem("data");
}
showList();
