'use server'
import connectDB from "@/app/utils/db";
import PostModel from "@/app/models/postModel";

export async function getPosts() {
    try {
        await connectDB();
        const data = await PostModel.find();
        console.log(data);
        return { msg: 'GET' }
    } catch (error) {
        return { errMsg: error.message }
    }
}
