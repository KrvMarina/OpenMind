import { NextResponse } from "next/server";
import connect from "@/app/utils/db";
import SchemaPost from "@/app/models/SchemaPost";

export const GET = async (request) => {
    try {
        await connect()
        const schemaPosts = await SchemaPost.find();

        return new NextResponse(schemaPosts, { status: 200 });
    }
    catch (err) {
        return new NextResponse("Error route", { status: 500 });
    }
};