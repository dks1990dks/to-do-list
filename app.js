const input = document.getElementById(`input-box`);
const addtaskbtn = document.getElementById(`btn`) ;
const listcontainer = document.querySelector(`.listcontainer ul`);

function addTask() {
    if(input.value.trim() ===``){
        const olderr = document.querySelector(`.err`)
        if(olderr) olderr.remove()
        let div = document.createElement(`div`);
        div.innerHTML=`You must add task here...`
        div.classList.add(`err`)
        listcontainer.insertAdjacentElement(`beforebegin`,div)
    }else{
        let err = document.querySelector(`.err`)
        if(err) err.remove()
         let li = document.createElement(`li`)
        listcontainer.appendChild(li)
         
        let tasktest = document.createElement(`span`)
        tasktest.classList.add(`tasktest`)
        tasktest.innerHTML=input.value;
        li.appendChild(tasktest)

        let span = document.createElement(`span`)
        span.classList.add(`delete-btn`)
        span.innerHTML= `\u00d7`
        li.appendChild(span)



    }
    input.value = ``

    
}

listcontainer.addEventListener(`click`,(e)=>{
        if (e.target.classList.contains(`delete-btn`)) {
            e.target.parentElement.remove()
        } else if(e.target.classList.contains(`tasktest`)){
            e.target.classList.toggle(`checked`)
        }
    })
    

addtaskbtn.addEventListener(`click`,()=>{
    addTask()
})