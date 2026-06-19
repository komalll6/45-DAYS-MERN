let todos = JSON.parse(localStorage.getItem("todos")) || [] //if local mei kuch pda hai toh wo display hoga varna kuchni show hoga, mean empty ho jayegi
//to get - JSON.parse 
display() 

function addTask(){
    let task = document.querySelector("#task-input").value
    let date = document.querySelector("#date-input").value

if (!task || !date){
    alert("please fill the task and date")
    return
}
    todos.push({
        taskname : task,
        taskdate : date,
    })

    localStorage.setItem("todo", JSON.stringify(todos)) //store on local storage even the page are refresh, "JSON.stringify" to store 
    display()

    document.querySelector("#task-input").value = ""
    document.querySelector("#date-input").value = ""

}   

function display(){ //sensation@12#
    let result = ""

    for(let i=0; i<todos.length; i++){
        result +=
        `<span> 
        ${todos[i].taskname} - ${todos[i].taskdate}

        <button onClick="deleteTask(${i})">Delete</button> 
        <button onClick="clearTask">Clear</buttun>
        </span> <br>`;

        document.querySelector("#list").innerHTML = result
        }
}

function deleteTask(index){
    todos.splice(index,1)
    localStorage.setItem("todo", JSON.stringify(todos)) //store on local storage even the page are refresh, "JSON.stringify" to store 
    display()
}
