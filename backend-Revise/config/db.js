// import mongoose from "mongoose";

// export const db = async () => {
// try{
//    mongoose.connect(process.env.MONGO_URL)
//    console.log("connected to db")
// }catch(err){
//   process.exit(1)
//   console.log(err.message)
// }
// };
import mongoose from "mongoose";

export const db = async () => {
    try {
        // Added await here!
        await mongoose.connect(process.env.MONGO_URL); 
        console.log("Connected to MongoDB successfully!");
    } catch (err) {
        console.log("Database connection error:", err.message);
        process.exit(1);
    }
};