import mongoose from 'mongoose'
import { DB_NAME } from './constants.js'
import {app} from './app.js'

import connectDB from './db/index.js'
import dotenv from 'dotenv'

dotenv.config({
    path: './env',
})

connectDB().then(()=>{
    app.listen(8000,()=>{
        console.log("Server is running at 8000");
    })
}).catch((err)=>console.log("Mongo connection failed!!",err))

// import express from 'express'
// import { error } from 'console';
// const app = express()

// ;(async () => {
//     try {
//         const connectionDB = await mongoose.connect(
//             `${process.env.MOGODB_URL}/${DB_NAME}`
//         )
//         // console.log('connection database', connectionDB)
//         app.on('error', (error) => {
//             console.log('error is', error)

//             // However, there's a commented-out line with throw error;. When this line is uncommented, it would throw the error, which means it would stop the application and print the error to the console.
//             // If you want to see the error without stopping the application, you can remove the throw error;
//             throw error
        // })
//         app.get("/",(req,res)=>{
//             res.send("Hello Express");
//             // hi its normal routing

//         })
//         app.get("/about",(req,res)=>{
//             res.send("Hello this is about page");

//         })
//         app.listen(process.env.PORT, () => {
//             console.log('App is listening')
//         })

       
//     } catch (err) {
//         console.log('Database Connection Error', err)
//         throw err
//     }
// })()
