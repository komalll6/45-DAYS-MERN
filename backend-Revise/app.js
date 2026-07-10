//confi, routes
// console.log("koml")

//to create server either in http or express

import express from "express" //must have to import
import dotenv from "dotenv"
import authRouter from "./api/router/auth.router.js"
const app = express()


//config:
dotenv.config()

//middleware
app.use(express.json())

//routes
app.use("/api/auth", authRouter)

//http://localhost:5000/api/auth/signup

export default app