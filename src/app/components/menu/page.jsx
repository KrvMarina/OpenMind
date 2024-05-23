import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Menu = ({ username }) => {
    return (
        <div className={styles.menu}>
            <h3 className={styles.titel_h3}>
                {username}
            </h3>
            <Link href="./add">Add new post</Link>
            <Link href="./userposts">My posts</Link>
        </div>
    )
}

export default Menu;
