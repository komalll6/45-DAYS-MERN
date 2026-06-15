//task - filter the greater ele which are greater than ele i given

let number = [23,53,12,64,16]

let age = number.filter((number) => number >= 44) 
console.log(age)


//find greater age >= (anynumber) 
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
let new_array = students.filter((i) => i.age >= 21)
console.log(new_array)