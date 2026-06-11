//functions are reusable code of block
//eg- addtion two numbers, like addition logic are use again and again => here's are funcitons are use
//two types- 

function greet(){   //function declaration, 
    console.log("good morning")
}

console.log("hi")
console.log("how are you ?")
greet() //function calling/invoking


function newfun(){
    console.log("here's second function are create")
}

console.log("dubara console.log")
newfun();



//parameters are- give some varibale in round brackets
//add function
function add(a,b){
    console.log(a+b)
}

add(2,3)


//multiply function
function multiply(c,d){
    console.log(c*d)
}

multiply(4,3)


//divide function
function divide(x,y){
    console.log(x/y)
}

divide(10,30)


//function scope- kaha tk area visible hai (SCOPR ARE BASICALLY => VISIBILITY)
function module(g,h){
    let f=7
    console.log(f)
    console.log(g+h)
}

module(6,9)



function isEven(num){
    if(num %2 === 0){
        console.log("even")
}

else{
    console.log("odd")
 }
}

isEven(29)



//square of number with functions
// function square(num){
//     if(num*2 ){
//         console.log("square")
//     }

//     else {
//         console.log("not square")
//     }
// }

// square(20)
// function square(num){
//     console.log("")
// }

// square(4)


// <= these are comments
//another method 
function add(a,b){
    return a+b;
}

let result = add(2,3)
console.log(add(2,3))



//short hand notations to create functions in js are => arrow functions
//ARROW FUNCTIONS
const adds = (s,j) =>{
    console.log(s+j)
}
adds(6,8)

const welcome = ()=>{
     console.log("helloo universe")
}
welcome()


const funs = (num) =>{
   if(num %2 === 0){
    console.log("even")
   }
   else(
    console.log("odd")
   )
}
funs(21)

