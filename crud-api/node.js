//to use exprees =  > first install express using npm install express --save
//get => to fetch data from server
//res => backend response to the frontend
//req => what the request is coming from the frontend
//res.json => to send json data to the frontend

//Postman => api bnayegy toh test kregy postman pr and check the response

import express from 'express'; //import express module

const app = express(); //create an express app => it is extense


//MIDDLEWARE => user login hai ya ni
app.use((req,res,next) =>{
    console.log("this is middleware")
    next() //jb wo chiz run kr jayegi toh next to control chla jayaga, agr next middle ware hai  toh next pr chla jaye
})



//this is routes
app.get('/', (req, res) => {
    // res.send("WORKING") //send response to the frontend
    res.send("<h1>Hello, World!</h1>")
})

app.get('/student', (req, res) => {
    res.json({name:"abc", age:22, city:"jalandhar cantt"}) //normally use this
})

//change the route or url to localhost:3001/student/1 => 1 is id
app.get('/student/:id', (req, res) => {

    res.json(console.log(req.params.id)) //use when we search for a specific student by id, name, age, city etc

    res.json(console.log(req.query)) //use when we use filter or search for a specific student by name or age or city etc

//()

    // res.json({name:"abc", age:22, city:"jalandhar cantt"}) //normally use this
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