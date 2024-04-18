import React from "react";
import Link from "next/link";
import styles from './page.module.css'


const Footer = () => {
    return (
        <div className={styles.container}>
            <div>©2023 OpenMind. All rights reserved.</div>
            <form action="">
                <h3>Form</h3>
                <input type="text" placeholder="Enter name" />
            </form>
        </div>

    )
}

export default Footer;