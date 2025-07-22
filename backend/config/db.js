import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBURL = process.env.MONGO_URI;
const DBNAME = process.env.MONGO_DB;

export async function dbconnect() {
    try {
        await mongoose.connect(`${DBURL}/${DBNAME}`);
        console.log("✅ MongoDB Atlas Connected");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
    }
}
