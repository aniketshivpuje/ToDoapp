
let todoList = [
    {
        item: 'iiegcc',
        dueDate: '4/10/2025'
    },
    {
        item: 'scfs',
        dueDate: '5/05/2025'
    }
];
displayItems()

function addTodo(){
   let inputElement = document.querySelector('#todo-input');
   let dateElemenet = document.querySelector('#todoDate');
   let todoItem  = inputElement.value;
   let todoDate = dateElemenet.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value = '';
  dateElemenet.value = '';
  displayItems()

}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');

    let newHtml = '';
    for(let i = 0; i < todoList.length; i++){

    let{item, dueDate} = todoList[i];

        newHtml += `
        
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick="todoList.splice(${i}, 1);
        displayItems()">Delete</button>
    
        `;


    } 
    containerElement.innerHTML = newHtml;
}