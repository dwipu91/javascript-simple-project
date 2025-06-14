document.querySelector("push").onclick = function () {
  if (document.querySelector("#todo-list input").value.length == 0) {
    console.log("Input is empty");
    alert("Please enter a task");
  } else {
    console.log("no data");
    alert("Task added: ");
  }
};
