import { NextResponse } from "next/server";
import connectDB from "@/app/utils/db";
import PostModel from "@/app/models/postModel";


export const GET = async (request) => {
    const url = new URL(request.url);
    const username = url.searchParams.get("username");

    try {
        await connectDB();
        const data = await PostModel.find(username && { username });
        console.log(data);
        return new NextResponse(JSON.stringify(data), { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};

export const POST = async (request) => {
    const body = await request.json();
    const newPost = new PostModel(body);

    try {
        await connectDB();
        await newPost.save();
        return new NextResponse("Post has been created", { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};


