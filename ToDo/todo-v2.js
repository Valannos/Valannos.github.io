/*GLOBAL VARIABLES*/

toDosUl = document.getElementById('toDos');
addToDoButton = document.getElementById('addToDoButton');
inputContent = document.getElementById('inputTodo');
prioritySelect = document.getElementById('selecteur_importance');
commentsTextArea = document.getElementById('comments');
inputTodo = document.getElementById('inputTodo');
ButtonValidEdit = document.getElementById("ButtonValidEdit");
ButtonValid = document.getElementById("ButtonValid");
//BUFFER
var taskObjectBuffer = new Task();
var delBtnBuffer;


/*DEFAULT ENTRIES*/


toDoTest = new Task();
toDoTest.intitule = "manger";
toDoTest.comments = "Des commentaires";
generateTodo(toDoTest);

/*OBJECTE CONSTRUCTOR*/

function Task() {
    this.intitule = "";
    this.priority = "";
    this.deadline = "";
    this.comments = "";
};


/*-------------FUNCTIONS-------------*/


/*ADDS INTITULATE AND DISPLAYS FORMULAR*/


function fillObjectTask() {
    addTask = new Task()
    addTask.intitule = inputContent.value;
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

//GENERATE A NEW TODO ENTRY USING PREVIOUSLY FILLED OBJECT TASK

function generateTodo(task) {

    /*BLOCKS CREATION*/

    var createLi = document.createElement("li");
    var createSpan = document.createElement("span");

    /*BUTTONS & innerHTML*/

    var todo_buttonDel = document.createElement("input");
    todo_buttonDel.type = "button";
    todo_buttonDel.value = "X";

    //CROSSING TASK INTITULATE UPPON CLIKING "X" BUTTON
    todo_buttonDel.addEventListener("click", function() {
    createSpan.classList.toggle("crossed");
    });

    var todo_buttonEdit = document.createElement("input");
    todo_buttonEdit.type = "button";
    todo_buttonEdit.value = "Edit";

    // todo_buttonEdit.addEventListener("click", function() {
    // ButtonValidEdit.classList.toggle("show");
    //
    //   prioritySelect = task.priority;
    //   commentsTextArea  = task.comments;
    //   toggleFormVisibility();
    //   ButtonValidEdit.addEventListener("click", function() {
    //   create_Comments.innerHTML = "Commentaires : " + commentsTextArea;
    //   ButtonValidEdit.classList.toggle("show");
    //   toggleFormVisibility();
    //
    //
    //
    //
    //   });
    // });

    createSpan.innerHTML = task.intitule;

    //comments AND Deadline SPANS GENERATION

    var create_Deadline = document.createElement("span");
    create_Deadline.innerHTML = "Deadline : " + task.deadline;

    var create_Comments = document.createElement("span");
    create_Comments.className = "comments_span";
    create_Comments.innerHTML = "Commentaires : " + task.comments;


    /*CHILDREN IMPLEMENTATION*/

    toDosUl.appendChild(createLi);
    createLi.appendChild(createSpan);
    createLi.appendChild(todo_buttonDel);
    createLi.appendChild(todo_buttonEdit);
    createLi.appendChild(create_Comments);
    createLi.appendChild(create_Deadline);



};

//EDIT ENTRY DATA





/*EVENTS*/


//CHECK IF THERE IS AN ENTRY AND LAUNCH FILLING APPLICATION

addToDoButton.addEventListener('click', function() {
    if (inputContent.value == "") {
        alert("aucune saisie");

    } else {
        var filledTask = fillObjectTask();
        taskObjectBuffer = filledTask;
        ButtonValid.classList.toggle("show");

    }

});

//LAUCHED handlerFormData, generateTodo WITH RESULTING OBJECT WHILE CLOSING FORMULAR UPPON VALIDATION

ButtonValid.addEventListener("click", function() {

    handlerFormData(taskObjectBuffer);
    generateTodo(taskObjectBuffer);
    toggleFormVisibility();
    ButtonValid.classList.toggle("show");

  });
