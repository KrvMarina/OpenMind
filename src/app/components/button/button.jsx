import React from "react";
import styles from './button.module.css'
import Link from "next/link";

const Button = ({ text, url, width, inverted }) => {
    const buttonClass = inverted ? styles.inverted : styles.container;

    return (
        <Link href={url}>
            <button className={buttonClass} style={{ width }}>{text}</button>
        </Link>
    )
}

export default Button;
