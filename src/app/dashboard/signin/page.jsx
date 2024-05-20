"use client"
import React, { useEffect, useState } from "react";
import styles from './page.module.css';
import Input from "@/app/components/input/input";
import Button from "@/app/components/button/button";
import Link from "next/link";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const Signin = () => {
    const session = useSession();
    const router = useRouter();
    const params = useSearchParams();



    if (session.status === "loading") {
        return <p>Loading...</p>;
    }

    if (session.status === "authenticated") {
        router?.push("/dashboard/add");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        signIn("credentials", {
            email,
            password,
        });
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.titel_h3}>Welcome back</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input type="e-mail" id="email" placeholder="Enter email" />
                <Input type="password" id="password" placeholder="Enter password" />
                <button className={styles.button}>Login</button>
                <p className={styles.under_form}>No account?<Link href="/dashboard/signup">Create</Link></p>


            </form>
        </div>
    )
}

export default Signin;
