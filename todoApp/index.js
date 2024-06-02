let tasks = document.querySelectorAll('.task');
let ul = document.querySelector('ul');
let inputBox = document.querySelector('#inputbox')
let addBtn = document.querySelector('#addBtn')
let taskContainer = document.querySelector('.task-container')

function addTask(taskName){
    let li = document.createElement('li')
    li.classList = ['task unchecked']
    // Create text node for task name
    let taskText = document.createTextNode(taskName);
    li.appendChild(taskText);
    li.innerHTML = taskName
    let span = document.createElement('span')
    span.classList=['close-btn']
    span.innerHTML="&times;"
    li.appendChild(span)
    ul.appendChild(li)
}

addBtn.addEventListener('click', ()=>{
    let taskName = inputBox.value 
    addTask(taskName);
    inputBox.value = ''
})


taskContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('unchecked');
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
    }
})

