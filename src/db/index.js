import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async() =>{
    try{
const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
console.log(`\n mongod connected succesfully!! DB host:$
    {connectionInst
    ance.connection.host}\n`);
    }
    catch(err)
    {
        console.log("MongoDB connection error(failed):", err);
        process.exit(1); // Exit the process with an error code  In Node.js:
    }
// process.exit(0) → means the program ended successfully ✅ , process.exit(1) → means the program ended due to an error ❌
    }
export default connectDB;
