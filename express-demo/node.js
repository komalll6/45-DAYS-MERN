//to use exprees =  > first install express using npm install express --save
//get => to fetch data from server
//res => backend response to the frontend
//req => what the request is coming from the frontend
//res.json => to send json data to the frontend

import express from 'express'; //import express module

const app = express(); //create an express app => it is extense

//thuis is routes
app.get('/', (req, res) => {
    // res.send("WORKING") //send response to the frontend
    res.send("<h1>Hello, World!</h1>")
})

app.get('/student', (req, res) => {
    res.json({name:"abc", age:22, city:"jalandhar cantt"}) //normally use this
})

app.get('/profile', (req, res) => {
    res.status(200).send("this is profile page") //normally use this
})
//agr koi error hai ya glt hai toh wo code return krega

app.get('/status', (req, res) => {
    res.send("this is status page") //normally use this
    res.json({"status":"ok", "message":"Everything is working fine"}) //normally use this
})

app.listen(3001, () =>{
    console.log("server is running")
})

app.listen(3001)

//insepct => network => header =>status code => 200 => means everything is working fine