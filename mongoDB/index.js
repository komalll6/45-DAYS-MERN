import express from 'express';
import connectDb from './config/db.js';
import studentRoutes from './routes/studentRoutes.js';

const app = express();

app.use(express.json());

connectDb();

app.use("/students", studentRoutes);

app.listen(5000, () => {
    console.log("Server running");
})

//backend structure => MVC STRUCTURE
//code are store in MODEL  (like user model, table model)
//VIEW- data
//controller => logic (api)
//routes => like post vala route mei chlega
//mongoDB conntections are reusable