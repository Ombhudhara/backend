//this file is use make method and handle the error in async function
 const asyncHandler=(requestHandle) => {
    (req,res,next)=>{
        Promise.resolve(requestHandle(req,res,next)).catch((err)=>next(err))
    }
    
 }



export {asyncHandler};//this is used to handle the error in async function

// const asyncHandler=(fn)=>async(req,response,next)=>{
// try{
// await fn(req,response,next)
// }
// catch(err)
// {
//     response.status(error||500).json({
//         sucees:false,
//         Message:err.message
// })
// }
// this is the method to handle the error in async function