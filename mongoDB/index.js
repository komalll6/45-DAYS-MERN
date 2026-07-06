import express from "express";

const app = express()

app.use(express.json())

app.listen(3001, ()=>{
    console.log("server is running")
})

//backend structure => MVC STRUCTURE
//code are store in MODEL  (like user model, table model)
//VIEW- data
//controller => logic (api)
//routes => like post vala route mei chlega
//mongoDB conntections are reusable