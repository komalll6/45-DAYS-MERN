//objects are- it is features of js
//like hv reallife entity- to make these entity => work in key pair values
hello = {
    name : "komal",
    age : 22,
    gender : "female"
}


//FUNCTIONS OF OBJECTS ARE =>
//1. acessesing values
console.log(hello.name)   // .(dot notation)
console.log(hello.gender)  
console.log(hello["name"])  //sqr[] (notation)

//2. updating values
hello.name = "kanan",
hello.age = 23
console.log(hello.name)

//3. adding values
hello.city = "jalandhar cantt"
console.log(hello.city)

//4. deleting values
delete hello.name
console.log(hello.name)


//want to print multiple properties => with loop
for(let key in hello){
    // console.log(object[key]) 
    console.log(key + ":" + hello[key])
}



user = {
    name : "ABC",
    city : "Jalandhar",
    collage : "LKCTC",
    dept : "IT",
    course : "MCA"
}

for(let key in user){
    console.log(key + ":" + user[key])
}


console.log(user.name)

user.name="XYZ"
console.log(user.name)