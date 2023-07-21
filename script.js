const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function name(){
    alert("What is your name?");
}

function toggleMode() {
    const root = document.documentElement;
    if (root.classList.contains("dark-mode")) {
      // Switch to light mode
      root.classList.remove("dark-mode");
    } else {
      // Switch to dark mode
      root.classList.add("dark-mode");
    }
  }
  
function addTask(){
    if(inputBox.value=== ''){
        alert("Please fill in task section");
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();