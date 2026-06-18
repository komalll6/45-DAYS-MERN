let todos = []
function addTask(){
    let task = document.querySelector("#task-input").value
    let date = document.querySelector("#date-input").value

    todos.push({
        taskname : task,
        taskdate : date,
    })
    display()

    document.querySelector("#task-input").value = ""
    document.querySelector("#date-input").value = ""

}   

function display(){
    let result = ""

    for(let i=0; i<todos.length; i++){
        result +=
        `<span> 
        ${todos[i].taskname} - ${todos[i].taskdate}
        </span> <br>`;

        document.querySelector("#list").innerHTML = result
        
        }
}