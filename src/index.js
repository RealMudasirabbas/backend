import connectdb from "./db/connectDB.js";
import dotenv from "dotenv";


dotenv.config({
    path: "./.env"
})

connectdb()

