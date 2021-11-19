//on form submit
let formElement = document.getElementById('todo-form'),
taskContainer = document.getElementById('task-container');

function addTask(e){
    e.preventDefault();
//get input value
let todoTaskEle = document.getElementById('todo-task'),
    todoTaskValue = todoTaskEle.value,

//create new li element <li></li>
liEle = document.createElement('li'),

//create new spam element <span></span>
spanEle = document.createElement('span'),

doneEle = document.createElement('a'),
//create a new element for 'done'

editEle = document.createElement('a'),
//create a new element for 'edit'

deleteEle = document.createElement('a');
//create a new element for 'delete'

//add input value inside the span(innerHtml) <span>task</span>
spanEle.innerHtml = todoTaskValue;

//add class names for each 'a' tag
doneEle.classList.add('done-btn');
editEle.classList.add('edit-btn');
deleteEle.classList.add('delete-btn');

//add text for each 'a' tag
doneEle.innerHTML = 'Done';
editEle.innerHTML = 'Edit';
deleteEle.innerHTML ='Delete';

//add Href for each 'a' tag
doneEle.setAttribute('href','#');
editEle.setAttribute('href','#');
doneEle.setAttribute('href','#');

//phase 2: add click event listener for all three links

//insert span tag inside 'li'
liEle.appendChild(spanEle);
//insert a.done tag inside 'li'
liEle.appendChild(spanEle);
//insert a.edit tag inside 'li'
liEle.appendChild(editEle);
//insert a.delete tag inside 'li'
liEle.appendChild(deleteEle);

//add click event listener for all three links
//insert span tag and other links inside 'li'
//insert li tag inside ol tag
taskContainer.append(liEle);
}




formElement.addEventListener('submit',addTask);
