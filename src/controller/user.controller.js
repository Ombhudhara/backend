import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser=asyncHandler(async(req,res)=>
{
    return res.status(200).json({
        message:"ok"
    })
})
// this is the method to register the user


export {registerUser};// this is used to export the registerUser method to the routes file where we can use it to handle the register route