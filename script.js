// const container = document.querySelector(".container");
const formEl = document.querySelector("#myForm");
// const addTodoIitemEl = document.querySelector(".add-todo-item");
// const iconButtonEl = document.querySelector(".icon-button");
// const inputTodoEl = document.querySelector("#input-todo");

const addedTodos = document.getElementsByClassName("added-todos")
// const todoItemEl = document.getElementsByClassName("todo-item");

const array = [];

class Todo {
    constructor (text){
        this.text = text;
    }
}

function displayTodo(){
    return;
}



function handleSubmit(event){
    event.preventDefault();
    console.log("todoItemEl");

    const todoInput = document.getElementById("input-todo");
    const todoItemEl = new Todo (todoInput.value);
    console.log(todoItemEl);

    
    array.push(todoItemEl);
    // displayTodo();
    todoInput.value = "";
}


formEl.addEventListner("submit", handleSubmit)



