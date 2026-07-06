//string interpolition- where thre have alot of code- to write integers inside the sentense
//THAT'S WHY WE USE TEH $ IN `` (IN BACKTICKS)
let name = "komal"
let age = 22
let favfood = "everything"
console.log(`My name is ${name}, My age is ${age}, My favFood is ${favfood}`)


//ARRAYS- collection of data, in others lang - collection of homogenous data
//use- similar kind of type like studen1 = oqj student2 = ifs, similar kind of itmes store at one place
let arr = [3,4,2, "S", 13, true] //write in [] brackets, even is number, boolean, string also
//HEV INDEX- LIKE START WITH 0,1,2,3.........
console.log(arr[4])
console.log(arr[5])  //INDEX

//to updating element:
arr[4] = 9320;
console.log(arr[4])


//to adding element
//hv two option- starting or end
arr.push(48)
console.log(arr[6]) //starting

arr.unshift(32)
console.log(arr[0]) //ending


//to delete element
arr.pop() //delete from end

arr.shift() //delete form start
console.log(arr)


//traverse or pirnt the array => use forloop
for(let i = 0; i<arr.length; i++){
    console.log(arr[i])
}


//another method- foreach => used in mordern js for acessing element 
arr.forEach(i =>{console.log(i) } ) 

//another method- includes => to check if element are present in array or not 
console.log(arr.includes(3)) //to check if arr have 5 or not => ans are either true or false


//anoter method- ]indexOf  => to find the index
//if it string- use ""
console.log(arr.indexOf("S"))


//forloop method
function printElements(arr){
    for(let i = 0; i<arr.length; i++){
    console.log(arr[i])
}
}

const students = ["ABC", "XYZ", "PQR"]
printElements(students)
printElements(arr) //print both array of elements



let family=["HELLO", "BYEE", "HIII", "UNIVERSE"]

function printElemets(family){
    for(let i = 0; i <= family.length; i++){
        console.log(family[i])
    }
}

printElements(family)