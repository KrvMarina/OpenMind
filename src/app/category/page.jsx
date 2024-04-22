import React from "react";
import Link from "next/link";
import styles from './page.module.css'
import { FaHeart } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { IoPeople } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";


const Category = () => {
    return (
        <div className={styles.container}>
            <Link href="/topic">Topic</Link>
            <div className={styles.card}>
                <FaHeart /> <h3 className={styles.titel_h3}>Life</h3>
            </div>
            <div className={styles.card}>
                <FaPerson /> <h3 className={styles.titel_h3}>Self improvement</h3>
            </div>
            <div className={styles.card}>
                <MdOutlineWork /> <h3 className={styles.titel_h3}>Wokr</h3>
            </div>
            <div className={styles.card}>
                <GrTechnology /> <h3 className={styles.titel_h3}>Technology</h3>
            </div>
            <div className={styles.card}>
                <HiMiniComputerDesktop /> <h3 className={styles.titel_h3}>Software Development</h3>
            </div>
            <div className={styles.card}>
                <FaPerson /> <h3 className={styles.titel_h3}>Media</h3>
            </div>
            <div className={styles.card}>
                <IoPeople /> <h3 className={styles.titel_h3}>Culture</h3>
            </div>
            <div className={styles.card}>
                <BiWorld /> <h3 className={styles.titel_h3}>World</h3>
            </div>
            <div className={styles.card}>
                <FaPlus /> <h3 className={styles.titel_h3}>Other</h3>
            </div>

        </div>
    )
}

export default Category;
