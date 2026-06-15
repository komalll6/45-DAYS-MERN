//MAP fucntions=> take array give condtions and make new array (USED ARROW FUNCTION)
//perform in every array and it create new array
let numbers = [2,4,5,7,9,12]

let sqr = numbers.map((ele) => ele*ele)
console.log(sqr)


let num = [93209]

let ele = num.map((element) => element+element)
console.log(ele)


//filter = > in array take perticular ele like just take the even num.
let even = numbers.filter((num) => num % 2===0)
console.log(even)


// find greater ele
// let number = [23,53,12,64,16]
// let age = number.filter((number) => number >= 44) 
// console.log(age)



// //find greater age >= (anynumber) 
// let students = [
// {
//     id : 1,
//     name : "KOMAL",
//     class : 3,
//     age : 22
// },
// {
//     id : 2,
//     name : "SIYA",
//     class : 4,
//     age : 23
// },
// {
//     id : 3,
//     name : "DIYA",
//     class : 5,
//     age : 21
// },
// {
//     id : 3,
//     name : "RIYA",
//     class : 6,
//     age : 20
// }
// ]
// let new_array = students.filter((i) => i.age >= 21)
// console.log(new_array)


//find function => find particular number
let students = [
{
    id : 1,
    name : "KOMAL",
    class : 3,
    age : 22
},
{
    id : 2,
    name : "SIYA",
    class : 4,
    age : 23
},
{
    id : 3,
    name : "DIYA",
    class : 5,
    age : 21
},
{
    id : 3,
    name : "RIYA",
    class : 6,
    age : 20
}
]
let new_array = students.find((i) => i.id == 3)
console.log(new_array)


//SLICE- create copy and return portion (doesn't modify original array)
let element = [4,34,6,8,54,64,8]
console.log(element.slice(2,5))

//splice- actually dlt the ele and give the portion (modify original array)
console.log(element.splice(2,5))