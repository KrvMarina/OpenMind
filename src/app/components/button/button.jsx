import React from "react";
import styles from './button.module.css'
import Link from "next/link";

const Button = ({ text, url, width }) => {
    return (
        <Link href={url}>
            <button className={styles.container} style={{ width }}>{text}</button>
        </Link>
    )
}

export default Button;