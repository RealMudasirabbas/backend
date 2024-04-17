import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectdb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("Database connected successfully", `${connectionInstance.connection.host}:${connectionInstance.connection.port}`);
    } catch (error) {
        console.log("Error database connection failed", error); 
        process.exit(1);
    }
}

export default connectdb