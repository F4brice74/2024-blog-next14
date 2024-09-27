import mongoose from "mongoose";

const connection : {isConnected?: number}={}

export const connectToDB = async () => {
    try {
        if (!process.env.MONGO) {
            throw new Error("MONGO environment variable is not defined");
        }
        if(connection.isConnected) {
            console.log("Already connected to DB");
            return;
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
        console.log("Connected to DB");
    } catch (error) {
        console.error("Error connecting to DB:", error);
        throw new Error("Error connecting to DB");
    }
};
