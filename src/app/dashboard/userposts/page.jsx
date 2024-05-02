import React from "react";
import styles from "./page.module.css";
import Menu from "../menu/page";

const Userposts = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.titel}>Dashboard</h2>
            <Menu />
        </div>
    )
}

export default Userposts;
