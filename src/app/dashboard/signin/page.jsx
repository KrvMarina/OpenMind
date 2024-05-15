"use client"
import React from "react";
import styles from './page.module.css';
import Input from "@/app/components/input/input";
import Button from "@/app/components/button/button";
import Link from "next/link";

export const metadata = {
    title: "Sign in",
    description: "page",
};

const Signin = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.titel_h3}>Welcome back</h3>
            <form className={styles.form}>
                <Input type="text" id="username" placeholder="Enter username" />
                <Input type="password" id="password" placeholder="Enter password" />
                <Button url="#" text="Sign up" width="100%" />
                <p className={styles.under_form}>No account?<Link href="/dashboard/signup">Create</Link></p>
            </form>
        </div>
    )
}

export default Signin;
