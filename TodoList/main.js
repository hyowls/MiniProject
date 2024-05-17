 let taskInput = document.getElementById('task-input')
let addTaskBtn = document.getElementById('task-add-btn')
let nav = document.querySelectorAll('.nav-item button')
let taskList = []
let filterList = []
let mode = 'home-tab'
addTaskBtn.addEventListener('click', addTask)
for(let i=0; i<nav.length; i++){
    nav[i].addEventListener('click',function filter(e){
        mode = e.target.id
        filterList = []
        if(mode === 'home-tab'){
            render()
        } else if(mode === 'profile-tab'){
            for(let i=0; i<taskList.length; i++){
                if(taskList[i].isComplete === false) {
                    filterList.push(taskList[i])
                }
            }
            render()
        } else if(mode === 'contact-tab'){
            for(let i=0; i<taskList.length; i++){
                if(taskList[i].isComplete === true){
                    filterList.push(taskList[i])
                }
            }
            render()
        }
    })
}
function addTask(){
    let task = {
        id : idGenerate(),
        taskContent : taskInput.value,
        isComplete : false
    }
    taskList.push(task)
    render()
}
function render(){
    let list = []
    if(mode === 'home-tab'){
        list = taskList
    } else if (mode === 'profile-tab' || mode === 'contact-tab') {
        list = filterList
    }
    let resultHTML = ''
    for(let i=0; i<list.length; i++){
        if(list[i].isComplete == true){
            resultHTML += `<div class="input-group mt-4">
            <div type="text" class="form-control task-content-area" placeholder="Recipient's username"
                aria-label="Recipient's username with two button addons">
                <p class="task-done">${list[i].taskContent}</p>
            </div>
            <button class="btn btn-outline-success select-btn" type="button" id="check-btn" onclick="toggleComplete('${list[i].id}')">완료하기</button>
            <button class="btn btn-outline-warning select-btn" type="button" id="delete-btn">삭제하기</button>
        </div>`
        } else {
            resultHTML += `<div class="input-group mt-4">
            <div type="text" class="form-control task-content-area" placeholder="Recipient's username"
                aria-label="Recipient's username with two button addons">
                <p>${list[i].taskContent}</p>
            </div>
            <button class="btn btn-outline-success select-btn" type="button" id="check-btn" onclick="toggleComplete('${list[i].id}')">완료하기</button>
            <button class="btn btn-outline-warning select-btn" type="button" id="delete-btn" onclick="deleteTask('${list[i].id}')">삭제하기</button>
        </div>`
        }
    }

    document.getElementById('task-board').innerHTML =resultHTML
}
function toggleComplete(id){
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete
            break
        }
    }
    render()
}
function deleteTask(id){
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList.splice(i, 1)
            break
        }
    }
    render()
}
function idGenerate(){
    return '_'+Math.random().toString(36).substr(2, 16); 
}