import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DBURL = process.env.MONGO_URI;
const DBNAME = process.env.MONGO_DB;

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(`${DBURL}/${DBNAME}`);
        console.log("✅ MongoDB Atlas Connected");
	} catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
    }
};