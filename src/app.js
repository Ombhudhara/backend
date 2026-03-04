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
export default app;