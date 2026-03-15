import { Router } from "express";
import { registerUser } from "../controller/user.controller.js";

const router=Router();

router.route("/register").post(registerUser);// this is the route to register the user. when we send a post request to this route then it will call the registerUser method which is defined in the user.controller.js file and it will handle the registration process of the user

export default router;// this is used to export the router to the app.js file where we can use it to handle the routes