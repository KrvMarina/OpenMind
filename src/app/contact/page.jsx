import React from "react";
import styles from './page.module.css'
import Image from "next/image";
import Button from "../components/button/button";

const Contact = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.titel}>Contact</h2>
            <h3 className={styles.titel_h3}>Let's Keep in Touch</h3>
            <div className={styles.content}>
                <form className={styles.form}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input type="text" id="name" placeholder="Enter name" className={styles.input} />
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input type="text" id="email" placeholder="Enter email" className={styles.input} />
                    <label htmlFor="message" className={styles.label}>Message</label>
                    <textarea
                        className={styles.text_area}
                        id="message"
                        placeholder="Enter message"
                        rows="10"
                    ></textarea>
                    <Button url="#" text="Send" width="100%" />
                </form>
            </div>
        </div>
    )
}

export default Contact;
