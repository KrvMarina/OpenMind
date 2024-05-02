"use client"
import React from "react";
import styles from './page.module.css';
import Input from "@/app/components/input/input";
import Button from "@/app/components/button/button";
import Link from "next/link";

const Register = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.titel_h3}>Create account</h3>
            <form className={styles.form}>
                <Input type="text" id="username" placeholder="Enter username" />
                <Input type="e-mail" id="email" placeholder="Enter email" />
                <Input type="password" id="password" placeholder="Enter password" />
                <Button url="#" text="Sign up" width="100%" />
                <p className={styles.under_form}>Already have an account?<Link href="/dashboard/signin">Sign in</Link></p>
            </form>
        </div>
    )
}

export default Register;
