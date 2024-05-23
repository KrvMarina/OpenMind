"use client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const session = useSession();
    return (
        <div className={styles.container}>
            <Link href="/." className={styles.logo}>OpenMind</Link>
            <div className={styles.links}>
                <Link href="/category">Category</Link>
                <Link href="/about">About</Link>
                <Link href="/dashboard/add">Dashboard</Link>
                {session.status === "authenticated" && (
                    <button className={styles.logout} onClick={signOut}>
                        Logout
                    </button>
                )}
            </div>
        </div>
    )
}

export default Navbar;