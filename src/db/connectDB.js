import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectdb = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGO_URI}/${DB_NAME}`
        );
        console.log(
            "Database connected successfully",
            `${connectionInstance.connection.host}:${connectionInstance.connection.port}`
        );

        const dbConnection = mongoose.connection;
        dbConnection.on("error", err => {
            console.error("MongoDB connection error:", err);
        });
        dbConnection.on("disconnected", () => {
            console.log("MongoDB disconnected");
        });
    } catch (error) {
        console.error(
            "Error database connection failed:",
            error.stack || error
        );
        process.exit(1);
    }
};

export default connectdb;
