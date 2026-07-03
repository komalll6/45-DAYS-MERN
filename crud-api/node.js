//Postman => api bnayegy toh test kregy postman pr and check the response

import express from 'express'; //import express module

const app = express(); //create an express app => it is extense

app.use(express.json()) //middleware => to parse json data from frontend to backend
//express.json => inbuilt middleware function in express.
//api => application programming interface.
//api => it is a set of rules that allows different software applications to communicate with each other.
//types of api => 1. get => to get data from backend to frontend
//2. post => to send data from frontend(add student) to backend
//3. put => to update data from frontend to backend / to change data from frontend to backend
//4. delete => to delete data from backend to frontend

const students = [ //array of objects => to store different data of students
    {
        id: 1,
        name: "John Doe",
        class: 20,
        city: "New York",
        school: "ABC School"
    },
   {
        id: 2,
        name: "Jane Smith",
        class: 22,
        city: "Los Angeles",
        school: "XYZ School"
    }
] //go to postman and check the response of get api => http://localhost:3001/students
//change to get and test the api in test block then check the response in postman => it will show the data of students in json format

app.get("/students",(req,res) =>{  //get api => to get data from backend to frontend
    res.json(students)  //send response to frontend
}) 

app.post("/students", (req, res) => {  //go to postman and change GET to POST and run the code
    students.push({id:3, name:"newname", age:22})
    res.json({
        message:"Student added successfully", students
    })
})

app.listen(3001, () =>{
    console.log("server is running")
})

//insepct => network => header =>status code => 200 => means everything is working fine