// Select All The DOM 
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoWrapper = document.querySelector("#todo-wrapper");
const button = document.querySelector("#button");

// todoList item Submited
todoForm.addEventListener("submit", todoItemList)

// todoItemList display
function todoItemList(e){
    e.preventDefault()
    // Get the inputValue from todoInput
    const todovalue = todoInput.value

    if(!todovalue){
        return button.value = "" 
    }

    // Create P Element
    const newtask = document.createElement("p")
    newtask.classList.add("task")
    newtask.setAttribute("draggable", "true")
    // newtask.ondragstart = drag; 
    // newtask.ondrop = drop; 
    // newtask.ondragover = allowDrop; 
    newtask.innerHTML = todovalue

    // Create Span tag 
    let spanIcon = document.createElement("span")

    // Create trashIcon
    let trashIcon = document.createElement("i");
    trashIcon.className = "fa fa-trash";
    trashIcon.setAttribute("aria-hidden", "true");

    trashIcon.addEventListener("click", function(){
        todoWrapper.removeChild(newtask)
    })

    // Create editIcon
    let editIcon = document.createElement("i")
    editIcon.className = "fas fa-edit"
    editIcon.setAttribute("aria-hidden", "true")

    editIcon.addEventListener("click", function () {
        newtask.setAttribute("contenteditable", "true");
        newtask.focus();
    });
    
    // appendChild editIcon and trashIcon in spanIcon
    spanIcon.appendChild(editIcon)
    spanIcon.appendChild(trashIcon);

    // appendChild span tag in p
    newtask.appendChild(spanIcon)

    // Set the P tag in TodoWrapper DIV
    todoWrapper.appendChild(newtask)

    // Reset The Input Value
    todoInput.value = ""
}

// drag function

function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}
// drop function

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);
    event.target.appendChild(draggedElement);
}
// allow drop function

function allowDrop(event) {
    event.preventDefault();
}