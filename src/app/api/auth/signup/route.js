import UserModel from "@/app/models/userModel";
import connectDB from "@/app/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const { username, email, password } = await request.json();

    await connectDB();

    const hashedPassword = await bcrypt.hash(password, 8);

    const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        return new NextResponse("User has been created", {
            status: 201,
        });
    } catch (err) {
        return new NextResponse(err.message, {
            status: 500,
        });
    }
};


