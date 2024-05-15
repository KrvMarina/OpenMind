import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
        return true;
    }
    try {
        await mongoose.connect('mongodb+srv://blog:blog@cluster0.vudsjgv.mongodb.net/blog');
        return true;
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;