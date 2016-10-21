/*GLOBAL VARIABLES*/
taskUl = document.getElementById("toDos");
htmlReq = document.getElementById("htmlReq");
addFormular = document.getElementById("addFormular");
addDeadlineDate = document.getElementById('addDeadlineDate');
addButton = document.getElementById("addButton");
addValidBtn = document.getElementById("addValidBtn");

editTaskNameField = document.getElementById("editTaskNameField");
editPrioritySelector = document.getElementById("editPrioritySelector");
inputField = document.getElementById("inputField");
htmlReq = document.getElementById('htmlReq');
editDeadlineDate = document.getElementById("editDeadlineDate");
editFormular = document.getElementById("editFormular");
editValidBtn = document.getElementById("editValidBtn");
deleteAllTasksBtn = document.getElementById("deleteAllTasksBtn");

incr = 1;
var bufferTask;
bufferObject = new Task();

/*WELCOME*/
// document.getElementsByClassName('mainDisplay').classList.toggle("hide");
document.getElementById("selfRequestDiv").classList.toggle("show");
document.getElementById("yesToRequest").addEventListener("click", requestSomesTasks);
document.getElementById("yesToRequest").addEventListener("click", toggleSelfRequestDiv);
document.getElementById("noToRequest").addEventListener("click", toggleSelfRequestDiv);

function toggleSelfRequestDiv() {
    document.getElementById("selfRequestDiv").classList.toggle("show");
}

deleteAllTasksBtn.addEventListener("click", function() {


    var allLi = document.querySelectorAll("li");
    for (var i = 0; i < allLi.length; i++) {
        allLi[i].remove();
    }
})

/*OBJECT CONSTRUCTOR*/

function Task(name, incr) {
    this.taskName = name;
    this.priority = "";
    this.incr = incr;
    this.deadline = "";
    this.httpId = "";
}


//OBJECT TEST

// exTask = new Task("Faire du code !", 0);
// taskElementsGenerator(exTask);

/*OBJECT INITIALISATION*/

addButton.addEventListener("click", createTaskObject);

function createTaskObject() {
    if (inputField.value == "") {
        alert("Saisie nulle");
    } else {
        newTask = new Task(inputField.value, incr);
        console.log(newTask.taskName);
        bufferObject = newTask;
        toggleAddFormular();
        incr += 1;
    }
}

/*ADDIONNAL DATA*/

addValidBtn.addEventListener("click", completeObjectData)

function completeObjectData() {
    bufferObject.deadline = addDeadlineDate.value;
    bufferObject.priority = addPrioritySelector.options[addPrioritySelector.selectedIndex].value;
    toggleAddFormular();
    console.log(bufferObject.deadline);
    console.log(bufferObject.priority);
    console.log(bufferObject.taskName);
    taskElementsGenerator(bufferObject);

}


function taskElementsGenerator(task) {

    createLi = document.createElement("li");
    createLi.id = "li" + this.incr;
    createP = document.createElement("p");
    createP.className = "priority" + task.priority;
    createP.innerHTML = task.taskName;
    console.log(createP.innerHTML);
    createP.id = "task" + this.incr;
    createCrossBtn = document.createElement("button");
    createCrossBtn.innerHTML = "Done";
    createSupprBtn = document.createElement("button");
    createSupprBtn.innerHTML = "Suppr.";
    createEditBtn = document.createElement("button");
    createEditBtn.innerHTML = "Edit";

    createPostBtn = document.createElement("button");
    createPostBtn.innerHTML = "Save on server";

    createDeadline = document.createElement("p");
    if (task.deadline == "") {

        createDeadline.innerHTML = "Pas de deadline indiquée";

    } else {
        createDeadline.innerHTML = "Deadline : " + task.deadline;
        console.log(task.deadline);

    }
    if (task.httpId != "") {
        console.log(task.httpId);
        var delHttpTask = document.createElement("button");
        delHttpTask.innerHTML = "Delete task on server";
        delHttpTask.id = task.httpId;
    }
    taskUl.appendChild(createLi);
    createLi.appendChild(createP);
    createLi.appendChild(createDeadline);
    createLi.appendChild(createCrossBtn);
    createLi.appendChild(createSupprBtn);
    createLi.appendChild(createPostBtn);
    createLi.appendChild(createEditBtn);
    if (task.httpId != "") {
        createLi.appendChild(delHttpTask);
        delHttpTask.addEventListener("click", taskOnServerDelete);
    }

    createSupprBtn.addEventListener("click", removeTask);
    createCrossBtn.addEventListener("click", crossTask);
    createPostBtn.addEventListener("click", taskSave);
    createEditBtn.addEventListener("click", editTask);



}

function editTask(e) {
    toggleEditFormular();
    var SelectedLi = e.target.parentNode;
    var selectedP = SelectedLi.firstElementChild;
    editTaskNameField.value = selectedP.innerHTML;

    // var SelectedDeadline = selectedP.nextElementSibling;
    // editDeadlineDate.value = SelectedDeadline.innerHTML;

    var priority = selectedP.className;
    console.log(priority);
    var numPriority = priority.substr(priority.length - 1);
    console.log(numPriority);
    for (var i = 0; i < editPrioritySelector.options.length; i++) {

        if (editPrioritySelector.options[i].value == numPriority) {
            editPrioritySelector.options[i].setAttribute("selected", "selected");
        }

    }
    bufferTask = selectedP.id;
}

editValidBtn.addEventListener("click", confirmEdit);

function confirmEdit(e) {

    document.getElementById(bufferTask).innerHTML = editTaskNameField.value;
    document.getElementById(bufferTask).className = "priority" + editPrioritySelector.options[editPrioritySelector.selectedIndex].value;
    toggleEditFormular();


}


function crossTask(e) {
    e.target.parentNode.firstElementChild.classList.toggle("crossed");
}


function removeTask(e) {
    Li = e.target.parentNode;
    Li.remove();

}
/*SHOWS or HIDE formulars*/

function toggleAddFormular() {
    addFormular.classList.toggle("show");
    allMainDisplay = document.getElementsByClassName('mainDisplay');
    for (var i = 0; i < allMainDisplay.length; i++) {
        allMainDisplay[i].classList.toggle("hide");
    }

}

function toggleEditFormular() {
    editFormular.classList.toggle("show");
    allMainDisplay = document.getElementsByClassName('mainDisplay');
    for (var i = 0; i < allMainDisplay.length; i++) {
        allMainDisplay[i].classList.toggle("hide");
    }

}

editCloseBtn.addEventListener("click", toggleEditFormular);


//HTML REQUEST - EVENT AND FUNCTION

htmlReq.addEventListener('click', requestSomesTasks);

function requestSomesTasks() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://10.105.49.50:8090/api/v1/todos");
    xhr.onload = function(e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                gotTasks = JSON.parse(xhr.responseText);

                for (var i = 0; i < gotTasks.length; i++) {
                    var toBeGeneratedTasks = new Task();
                    toBeGeneratedTasks.taskName = gotTasks[i].task;
                    toBeGeneratedTasks.priority = gotTasks[i].priority;
                    toBeGeneratedTasks.httpId = gotTasks[i].id;

                    taskElementsGenerator(toBeGeneratedTasks);
                }
            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.onerror = function(e) {
        console.error(xhr.statusText);
    };
    xhr.send(null);

}

function taskSave(e) {
    var taskPriority
    var taskName
    var taskStr;
    var taskRecipient;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://10.105.49.50:8090/api/v1/todo");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function(e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 201) {
                console.log(xhr.responseText);

            }
        } else {
            console.error(xhr.statusText);
        }
    }
    xhr.onerror = function(e) {
        console.error(xhr.statusText);
    };

    selectedLi = e.target.parentNode;
    selectedP = selectedLi.firstElementChild;
    taskPriority = selectedP.getAttribute("class");
    numTaskPriority = taskPriority.substr(taskPriority.length - 1);
    taskName = selectedP.innerHTML;
    taskRecipient = {
        "task": taskName,
        "priority": numTaskPriority
    };
    taskStr = JSON.stringify(taskRecipient);
    xhr.send(taskStr);
};






function taskOnServerDelete(e) {
    var taskPriority
    var taskName
    var taskStr;
    var taskRecipient;

    var xhr = new XMLHttpRequest();

    var url = "http://10.105.49.50:8090/api/v1/todo/" + e.target.id;
    xhr.open("DELETE", url);
    xhr.onload = function(e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 201) {
                console.log(xhr.responseText);

            }
        } else {
            console.error(xhr.statusText);
        }
    }
    xhr.onerror = function(e) {
        console.error(xhr.statusText);
    };



    xhr.send(null);
    e.target.parentNode.remove();
};
