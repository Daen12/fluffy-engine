const toDoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
let toDos = [];
//Every time a todo was painted, I want to push that into this array.

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
} // this toDos is saved in localstorage, but I want to save this as arrays, not boring texts(=stringified).

function deleteTodo(event){
    const li = event.target.parentElement; //this points to whatever we wrote inside 'li' tag we created.
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //filter works for every value and executes function, and if "true", this value remains. This line is leaving all lists except for the list with the id that we want to delete.
    //parseInt-ing li.id will turn the text into the number so it's the same type with toDo.id!
    saveToDos();
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value; //We're copying the current value of Todo into new variable.
    todoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(), //by assigning ids, we can delete each list in the localstorage.
    };
    toDos.push(newTodoObj); //pushing the text the user wrote into array
    paintTodo(newTodoObj);
    saveToDos();

}

toDoForm.addEventListener("submit", handleTodoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo); 
    //Inside forEach() goes a function. This function is executed 'for each' of the parsedToDos array.

} // boring texts of todos are stored as alive arrays that js understands!



// 