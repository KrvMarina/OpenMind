import React from "react";
import styles from './page.module.css';
import Button from "../button/button";


const Footer = () => {
    return (
        <div className={styles.container}>
            <div>©2023 OpenMind. All rights reserved.</div>
            <form action="" className={styles.form}>
                <h3 className={styles.titel_h3}>Subscribe</h3>
                <label htmlFor="email" className={styles.label}>News!</label>
                <div className="">
                    <input type="email" placeholder="Enter e-mail" id="email" className={styles.input} />
                    <Button url="#" text="Send" inverted />
                </div>

            </form>
        </div>

    )
}

export default Footer;