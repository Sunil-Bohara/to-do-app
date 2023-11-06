console.log("to do list");

const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");
const btn = document.getElementById("btn");

function addTask(){
  if(inputBox.value == ""){
    alert("first write something to add");
  }else {
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";
  saveData();
}

btn.addEventListener("click", () => {
  addTask();
})

listContainer.addEventListener("click", (e) => {
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
})

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();