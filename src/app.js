import express from 'express'
import cors from "cors";
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN, //which sites or frontend or website are you allowing to request to backend.
    credentials:true
}));

app.use(express.json({limit:'16kb'}))//how much json we will accept..this is limitation for json
app.use(express.urlencoded({extended:true,limit:'16kb'}))
app.use(express.static("public"))//when we get pdf or any file like image it will store in public folder.
app.use(cookieParser())

import userRouter from "./routes/user.router.js"

//routes declaration

app.use("/users",userRouter);

// app.get('/', (req, res) => {})
export { app }
