import React from "react";
import Link from "next/link";
import styles from './page.style.css'

const Category = () => {
    return (
        <div className={styles.container}>
            <Link href="/topic">Topic</Link>
            Category
        </div>
    )
}

export default Category;
