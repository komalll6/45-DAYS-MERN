import mongoose from 'mongoose'

const connectDb = () =>{ mongoose.connect("mongodb+srv://komalkalra698:radheradhe123@cluster0.g1sskil.mongodb.net/?appName=Cluster0")
.then(() => console.log("mongoose connected"))
}

export default connectDb