let count = 0
function increment(){
   count++;
   let text = document.querySelector("#count")
   text.innerText = count
   text.style.color = "gray"

}

function decrement(){
   count--;
   let text = document.querySelector("#count")
   text.innerText = count
   text.style.color = "gray"
}

function reset(){
    count = 0
    let text = document.querySelector("#count")
    text.innerText = count
}