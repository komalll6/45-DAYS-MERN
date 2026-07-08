//local host, databases
import { populate } from "dotenv"
import app from "./app.js"

//db:



//localhost: 

// app.listen(3000, () =>{
app.listen(process.env.PORT, () =>{
    console.log("localhost running at 3000")
})