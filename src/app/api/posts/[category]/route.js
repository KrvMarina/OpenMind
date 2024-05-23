import { NextResponse } from "next/server";
import connectDB from "@/app/utils/db";
import PostModel from "@/app/models/postModel";

export const GET = async (request, { params }) => {
    const { category } = params;

    try {
        await connectDB();
        const data = await PostModel.find({ category: category });

        return new NextResponse(JSON.stringify(data), { status: 200 });
    } catch (err) {
        console.error(err);
        return new NextResponse("Database Error", { status: 500 });
    }
};
