//CREATE THE SCHEMA or structure
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({ //inbuild =>mongoose.schema
   name : {
    type : String,
    required : true
   },

   age : {
    type : Number
   },

   email :{
    type : String
   }
})

const Student = mongoose.model("Student", studentSchema)

export default Student