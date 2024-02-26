import mongoose from "mongoose";
import 'dotenv/config'


let mongo = process.env.MONGODB_CONNECT_URI;

const connectDB=async ()=>{
    try{
        await mongoose.connect(mongo);
        console.log("connected to server")
    }
    catch(err){
        console.log(err)
    }
}
export default connectDB;