let itemContainer=document.getElementsByClassName("todo-container")[0];
console.log(itemContainer);

const todoList = document.querySelector(".todo-list");
console.log(todoList);


let input=document.querySelector(".input-text");
console.log(input)

let add=document.getElementsByClassName("add-btn")[0];
console.log(add)

//Event Listeners//

add.addEventListener("click", addTasks);


function addTasks(e) {
  
   e.preventDefault();
  
   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");
  
   const newTodo = document.createElement("li");
   newTodo.innerText = input.value;
   
   newTodo.classList.add("todo-item");
   todoDiv.appendChild(newTodo);
   input.value = "";

   //Created a completed button
   const completedButton = document.createElement("button");
   completedButton.innerHTML = `<i class="fas fa-check"></i>`;
   completedButton.classList.add("complete-btn");
   todoDiv.appendChild(completedButton);
   //Created trash button
   const trashButton = document.createElement("button");
   trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
   trashButton.classList.add("trash-btn");


   todoDiv.appendChild(trashButton);
  
   todoList.appendChild(todoDiv);

  

   console.log(itemContainer)


}

//delete button functionality//
todoList.addEventListener("click", deleteTodo);

function deleteTodo(e) {
  
    const item=e.target;
    if(item.classList[0]=="trash-btn"){
      const todo=item.parentElement;
      todo.remove()
    }

    if(item.classList[0]=="complete-btn"){
      const todo=item.parentElement;
      todo.classList.toggle("completed")
    }

}

document.getElementById('clear').addEventListener('click', handleClear);

function handleClear(e) {
  document.querySelector('ul').innerHTML = '';
}