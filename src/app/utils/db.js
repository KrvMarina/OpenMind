import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
        return true;
    }

    try {
        await mongoose.connect('mongodb+srv://blog:blog@cluster0.vudsjgv.mongodb.net/blog');
    } catch (error) {
        throw new Error("Connection failed!");
    }
}

export default connectDB;