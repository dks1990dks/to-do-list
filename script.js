const input = document.getElementById("input-box");
const listContainer = document.querySelector(".listcontainer ul")
const addtaskButton = document.getElementById("btn")

function addTask() {
    if (input.value.trim() === "") {
        let olderr = document.querySelector(`.err`)
        if(olderr) olderr.remove()

        let div = document.createElement("div")
        div.innerHTML = `You must enter some task to add task`
        div.classList.add("err")
        document.querySelector(".listcontainer").insertAdjacentElement("afterbegin",div)
        
    } else {
 const err = document.querySelector(`.err`)
 if(err) err.remove()
        let li = document.createElement(`li`)
        let tasktest = document.createElement(`span`) 
        tasktest.innerHTML=input.value
        tasktest.classList.add(`tasktest`)

        let span = document.createElement(`span`)
        span.innerHTML=`\u00d7`
        span.classList.add(`delete-btn`)
        
        li.appendChild(tasktest)
        li.appendChild(span)
        listContainer.appendChild(li)

        
    }
    input.value = ""
    saveData()
}

listContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
        saveData()
    } else if (e.target.classList.contains('tasktest')) {
        e.target.classList.toggle('checked');
        saveData()
    }
}, false);

addtaskButton.addEventListener(`click`,()=>{
    addTask()
}
)

function saveData() {
    localStorage.setItem(`data`,listContainer.innerHTML)
    
}

function showData() {
    listContainer.innerHTML = localStorage.getItem(`data`)
    
}
showData()

