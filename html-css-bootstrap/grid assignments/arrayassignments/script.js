const inputTaskElmt = document.getElementById("inputTask")
const addNewTaskBtnElmt = document.getElementById("addNewTaskBtn")
const clearAllBtnElmt = document.getElementById("clearAllBtn")
const toDosElmt = document.getElementById("toDos")

let toDos = []

function addNewTask(){
    toDo = inputTaskElmt.value 
    toDos.push(toDo) 
    inputTaskElmt.value = ''
    console.log(toDos)
    renderToDos()
}

addNewTaskBtnElmt.addEventListener('click', addNewTask)

function renderToDos(){
    toDosElmt.innerHTML = toDos.map((td,i)=>`
                            <p>${td} <button class="btn btn-danger" onclick="deleteToDo(${i})">Delete</button></p>
    `).join("")
}


function deleteToDo(index){
    toDos.splice(index, 1)
    renderToDos()
}


clearAllBtnElmt.addEventListener("click", ()=>{
    toDos = []
    renderToDos()
})



// marks calculate 


const inputMarksElmt = document.getElementById("inputMarks")
const addMarksBtnElmt = document.getElementById("addMarksBtn")
const calculateElmt = document.getElementById("calculate")
const resetMarksElmt = document.getElementById("resetMarks")
const marksDisplayElmt = document.getElementById("marksDisplay")

let marks = []

function addMarks(){
    newMark = Number(inputMarksElmt.value)
    marks.push(newMark)
    inputMarksElmt.value = ''
    console.log(marks)
}
addMarksBtnElmt.addEventListener("click", addMarks)

function calculate(){
    totalMarks = marks.reduce((sum,m)=>{
        return sum = sum+m
    },0)

    avgMarks = (totalMarks/ marks.length).toFixed(2)

    highestMarks = 0
    lowestMarks = Infinity
    for(i=0;i<marks.length;i++){
        if(marks[i] > highestMarks){
            highestMarks = marks[i]
        }
    }
    for(i=0;i<marks.length;i++){
        if(marks[i] < lowestMarks){
            lowestMarks = marks[i]
        }
    }


    marksDisplayElmt.innerHTML =` 
        <div class="container bg-secondary">
    
    <p>Total Marks :  ${totalMarks}</p>
     <p>Average Marks :  ${avgMarks}</p>
     <p>Highest Marks :  ${highestMarks}</p>
     <p>Lowest Marks :  ${lowestMarks}</p>
     </div>
     `

}
calculateElmt.addEventListener('click', calculate)

function reset(){
    marks=[]
    marksDisplayElmt.innerHTML = ''
}

resetMarksElmt.addEventLis