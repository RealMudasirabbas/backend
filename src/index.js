import connectdb from "./db/connectDB.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
    path: "./.env"
})

connectdb()
.then(() => {
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
})
})
.catch((err) => {

    console.log("Database connection failed", err);
})

