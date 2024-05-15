import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const dbConnection = async() => {

    try {
        await mongoose.set("strictQuery", false)
                      .connect( process.env.MONGODB || '')

        console.log('Database online');
    
    } catch (error) {
        console.log(error);
        throw new Error('Error starting database');
    }


}

