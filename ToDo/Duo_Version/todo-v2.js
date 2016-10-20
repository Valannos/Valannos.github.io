/*GLOBAL VARIABLES*/

toDosUl = document.getElementById('toDos');
addToDoButton = document.getElementById('addToDoButton');
inputContent = document.getElementById('inputTodo');
prioritySelect = document.getElementById('selecteur_importance');
commentsTextArea = document.getElementById('comments');
inputTodo = document.getElementById('inputTodo');
ButtonValidEdit = document.getElementById("ButtonValidEdit");
ButtonValid = document.getElementById("ButtonValid");
increment = 2;
deadLineFormularField = document.getElementById("deadline_date");





//BUFFER
var taskObjectBuffer = new Task();
var delBtnBuffer;
var editTextBuffer;
var id_comments;
var id_priority;


/*DEFAULT ENTRIES*/


toDoTest = new Task();
toDoTest.intitule = "manger";
toDoTest.comments = "Des commentaires";
toDoTest.increment_value = "1";
toDoTest.deadline = "12-05-2017";
generateTodo(toDoTest);

/*OBJECTE CONSTRUCTOR*/

function Task() {
    this.intitule = "";
    this.priority = "";
    this.deadline = "";
    this.comments = "";
    this.increment_value = "";
};


/*-------------FUNCTIONS-------------*/

/*ADD NEW OBJECT UPPON PUSHING "ADD" BUTTON*/
function createObject() {
    if (inputContent.value == "") {
        alert("aucune saisie");

    } else {
        var filledTask = fillObjectTask();
        filledTask.increment_value = increment;
        increment++;
        taskObjectBuffer = filledTask;


    }

}

/*ADDS INTITULATE AND DISPLtargetAYS FORMULAR*/


function fillObjectTask() {
    addTask = new Task()
    addTask.intitule = inputContent.value;
    ButtonValid.classList.toggle("show");
    toggleFormVisibility();
    return addTask;


}

//TURN ON OR TURN OFF FORMULAR

function toggleFormVisibility() {
    var popup = document.getElementById('popup');
    popup.classList.toggle("show");
    var todo_listing = document.getElementsByClassName('todo_listing');
    for (var i = 0; i < todo_listing.length; i++) {
        todo_listing[i].classList.toggle('hide');
    }
}

//FILL priority comments AND deadline PROPERTIES AFTER FIELDS HAVE BEEN FILLED BY USER

function handlerFormData(task) {

    task.priority = prioritySelect.options[prioritySelect.selectedIndex].value;
    task.comments = document.getElementById('comms').value;
    task.deadline = document.getElementById('deadline_date').value;

    console.log(task.intitule);
    console.log(task.priority);
    console.log(task.deadline);
    console.log(task.comments);


}
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
                  toBeGeneratedTasks.intitule = gotTasks[i].task;
                  toBeGeneratedTasks.priority = gotTasks[i].priority;
                  generateTodo(toBeGeneratedTasks);
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

//GENERATE A NEW TODO ENTRY USING PREVIOUSLY FILLED OBJECT TASK
function generateTodo(task) {

    /*BLOCKS CREATION*/

    var createLi = document.createElement("li");
    var createSpan = document.createElement("span");

    /*BUTTONS & innerHTML*/

    var todo_buttonDel = document.createElement("input");
    todo_buttonDel.type = "button";
    todo_buttonDel.value = "Achevée";
    todo_buttonDel.className = "done_button"

    //CROSSING TASK INTITULATE UPPON CLIKING "X" BUTTON
    todo_buttonDel.addEventListener("click", function() {
        createSpan.classList.toggle("crossed");
    });

    var todo_buttonEdit = document.createElement("input");
    todo_buttonEdit.type = "button";
    todo_buttonEdit.value = "Edit";
    todo_buttonEdit.className = "edit_button"


    createSpan.innerHTML = task.intitule;
    createSpan.className = "task_content";

    //comments AND Deadline SPANS GENERATION

    var create_Deadline = document.createElement("span");

    create_Deadline.innerHTML = " Deadline : " + task.deadline;
    create_Deadline.setAttribute("id", "deadline" + task.increment_value);

    var create_Comments = document.createElement("span");
    create_Comments.setAttribute("id", "comments" + task.increment_value);
    create_Comments.innerHTML = "Commentaires : " + task.comments;
    create_Comments.className = "commentaries_box";

    var create_priority = document.createElement("span");
    // create_priority.setAttribute("id-priority", task.increment_value);
    // create_priority.innerHTML = "Priorité : " + task.priority;

    //HTTP REQUEST




    //EDIT EVENT
    todo_buttonEdit.addEventListener("click", function(e) {
        ButtonValidEdit.classList.toggle("show");
        var comments = e.target.nextElementSibling;

        console.log(comments);
        // console.log(this);
        console.log(this.parentNode);

        id_comments = comments.getAttribute('id');



        // deadline = comments.nextElementSibling;
        // deadLineFormularField.value = deadline.innerHTML;
        toggleFormVisibility();

        ButtonValidEdit.addEventListener("click", function(e) {
            console.log(id_comments);
            document.getElementById(id_comments).innerHTML = document.getElementById('comms').value;
            ButtonValidEdit.classList.toggle("show");
            toggleFormVisibility();




        });
    });


    /*CHILDREN IMPLEMENTATION*/

    toDosUl.appendChild(createLi);
    createLi.appendChild(createSpan);
    createLi.appendChild(todo_buttonDel);
    createLi.appendChild(todo_buttonEdit);
    createLi.appendChild(create_Comments);
    createLi.appendChild(create_priority);
    createLi.appendChild(create_Deadline);



};

//EDIT ENTRY DATA





/*-------------------------------EVENTS------------------------*/

/*CLOSE FORMULAR EVENT*/

document.getElementById("closeBtn").addEventListener("click", toggleFormVisibility);


//CHECK IF THERE IS AN ENTRY AND LAUNCH FILLING APPLICATION

addToDoButton.addEventListener('click', createObject);

//LAUCHED handlerFormData, generateTodo WITH RESULTING OBJECT WHILE CLOSING FORMULAR UPPON VALIDATION

ButtonValid.addEventListener("click", function() {

    handlerFormData(taskObjectBuffer);
    generateTodo(taskObjectBuffer);
    toggleFormVisibility();
    ButtonValid.classList.toggle("show");

});

document.getElementById("RequestButton").addEventListener("click", requestSomesTasks);
