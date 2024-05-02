"use client"
import React from "react";
import styles from './page.module.css';
import Input from "@/app/components/input/input";

const Register = () => {
    return (
        <div className={styles.container}>
            <Input type="text" id="name" placeholder="Enter name" />
        </div>
    )
}

export default Register;
