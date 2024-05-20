import NextAuth from "next-auth";
import connectDB from "@/app/utils/db";
import UserModel from "@/app/models/userModel";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials) {
                await connectDB();

                try {
                    const user = await UserModel.findOne({
                        email: credentials.email,
                    });

                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        if (isPasswordCorrect) {
                            return user;
                        } else {
                            throw new Error("Wrong Credentials!");
                        }
                    } else {
                        throw new Error("User not found!");
                    }
                } catch (err) {
                    throw new Error(err);
                }
            },
        })
    ],
    pages: {
        error: "/dashboard/signup",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {

                token.username = user.username;

            }
            return token;
        },
        async session({ session, token }) {
            if (token) {

                session.user.username = token.username;

            }
            return session;
        },
    },
});

export { handler as GET, handler as POST };