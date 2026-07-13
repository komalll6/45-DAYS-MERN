import mongoose from "mongoose"

//logical structure 
const authSchema = new mongoose.Schema({
    userName : {
        type: String,
        require: true,
        trim: true
    },
    email : {
        type: String,
        require: true,
        trim: true
    },
    password : {
        type: String,
        require: true,
        trim: true
    }
}, {timestamps:true}) //jo data create hoga wo kb or kitn time pr hoga


export const Auth = mongoose.model("Auth", authSchema) 