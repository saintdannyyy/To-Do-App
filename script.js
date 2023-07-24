const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const nameBtn = document.getElementById("nameBtn");
let userName = localStorage.getItem("userName");

nameBtn.addEventListener("click", function() {
    if (!userName) {
        name();
    }
});

nameBtn.addEventListener("dblclick", function() {
    if (userName) {
        login();
    }
});

function name(){
    userName = prompt("What is your name?");
    if (userName) {
        login();
        saveData();
    }
}

function login() {
    const loginButton = document.getElementsByClassName('btn')[0];
    loginButton.innerHTML = "Hello " + userName + ", Welcome to your To-Do App.";
    loginButton.classList.add('clicked');
    localStorage.setItem("userName", userName); // Save the userName to localStorage
}

// Load the saved userName when the page loads
window.addEventListener("load", function() {
    if (userName) {
        login();
    }
});


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
