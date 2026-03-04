// require("dotenv").config({path: "./.env"}); 
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
    path: "./.env"
})
connectDB()

//when the database connection is successful, we can start the server
.then(()=>
{
     async()=>{
       
        app.on("error",(err)=>{
            console.error("Error:",err);//this error is related to the server, not the database connection error
            throw err;
        })
     }
    app.listen(process.env.PORT||8000,()=>{
        console.log('server is running on port ${process.env.PORT||8000}');
    })
})//when database connection is successful ,wecan handle the error using catch block
.catch((err)=>{
    console.log("Mongo db connection is failed!!",err);
})























// import express from "express";
// const app = express();


// (async()=>
// {
//     try{
          
//           await mongoose.connect(`${process.env.MONGODB_URL}/$
//           {DB_NAME}`)
//           app.on("error",(err)=>
//           {
//               console.error("Error:",err);
//               throw err;
//           })// listen to the port
//           app.listen(process.env.PORT,()=>{
//         console.log(`Server is running on port ${process.env.port()}`);
//     });
//     }
//     catch(err)
// {
//     console.error("Error:",err);
//     throw err;
// }    
// })()


