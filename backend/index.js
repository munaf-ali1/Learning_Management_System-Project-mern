import express from 'express';
const app = express();
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import authRouter from './routes/auth.routes.js';
import courseRouter from './routes/course.routes.js';

import testRouter from './routes/test.routes.js' ;
import McqRouter from './routes/mcq.routes.js';
import DsaRouter from './routes/dsa.routes.js';


dotenv.config();

const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
)


app.use(express.json());
app.use(cookieParser())


app.use("/api/auth",authRouter);
app.use("/api/courses",courseRouter);

app.use("/api/tests",testRouter);
app.use("/api/mcqs",McqRouter);
app.use("/api/dsa", DsaRouter);








app.get('/', (req, res) => {
  res.send('Hello World!');
});





app.listen(port,()=>{
    connectDB();
    console.log(`Server is running on port ${port}`);

})

