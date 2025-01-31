// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

// function addTask() {
//     if(inputBox.value === ''){
//         alert("You must write something!");
//     }
//     else {
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     inputBox.value = "";
//     saveData();
// }

// listContainer.addEventListener("click", function(e){
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//         saveData();
//     }
//     else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         saveData();
//     }
// }, false);

// function saveData(){
//     localStorage.setItem("data", listContainer.innerHTML);
// }

// function showTask(){
//     listContainer.innerHTML = localStorage.getItem("data");
// }
// showTask();

// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");
// const darkModeToggle = document.getElementById("dark-mode-toggle");
// const body = document.body;

// function addTask() {
//     if(inputBox.value.trim() === ''){
//         alert("You must write something!");
//     } else {
//         let li = document.createElement("li");
//         li.textContent = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     inputBox.value = "";
//     saveData();
// }

// listContainer.addEventListener("click", function(e){
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//         saveData();
//     } else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         saveData();
//     }
// }, false);

// function saveData(){
//     localStorage.setItem("data", listContainer.innerHTML);
// }

// function showTask(){
//     listContainer.innerHTML = localStorage.getItem("data") || "";
// }
// showTask();

// // Dark mode toggle functionality
// if (localStorage.getItem("darkMode") === "enabled") {
//     body.classList.add("dark-mode");
//     darkModeToggle.textContent = "☀️";
// }

// darkModeToggle.addEventListener("click", () => {
//     body.classList.toggle("dark-mode");

//     if (body.classList.contains("dark-mode")) {
//         localStorage.setItem("darkMode", "enabled");
//         darkModeToggle.textContent = "☀️";
//     } else {
//         localStorage.setItem("darkMode", "disabled");
//         darkModeToggle.textContent = "🌙";
//     }
// });

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;
const darkModeIcon = darkModeToggle.querySelector("img");

function addTask() {
    if(inputBox.value.trim() === ''){
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
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
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data") || "";
}
showTask();

// Dark mode toggle functionality
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeIcon.src = "images/dark.png";
} else {
    darkModeIcon.src = "images/light.png";
}

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        darkModeIcon.src = "images/dark.png";
    } else {
        localStorage.setItem("darkMode", "disabled");
        darkModeIcon.src = "images/light.png";
    }
});