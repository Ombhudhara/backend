import express from "express";
import cors from "cors";//this is used to handle cross-origin resource sharing(means to allow the frontend to access the backend resources)
import cookieParser from "cookie-parser";//it use to handle the cookies. it is accept the coikies from the localstorage and sent to the server
const app = express();//this is method



//when we use middleware at that time we use app.use() method
//install cors package to handle cross-origin resource sharing
//install cookie-parser package to handle cookies

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true}))

app.use(express.json(express.json({limit:"016kb"})))//this is accept the json data accepted from the frontend
app.use(express.urlencoded({extended:true,limit:'16kb'}))//this is used to accept the url encoded data from the frontend
app.use(express.static("public"))//this is used to serve the static files from the public folder
app.use(cookieParser())//this is used to handle the cookies. it is accept the coikies from the localstorage and sent to the server


//routes import 
import userRouter from "./routes/user.routes.js";//this is used to import the user routes from the user.routes.js file where we have defined the routes for the user related operations


//routes declaration
app.use("/api/v1/users",userRouter);//this write using middleware to handle the user related routes. when we use this middleware then all the routes defined in the user.routes.js file will be prefixed with /users. for example if we have defined a route /register in the user.routes.js file then it will be accessed as /users/register in the frontend



export default app;