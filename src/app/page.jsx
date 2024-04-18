"use client";
import Image from "next/image";
import styles from "./page.module.css";
//import Hero from "public/hero.png";
//import Button from "@/components/Button/Button";

export default function Home() {
    return (
        <div >
            <h1 className={styles.titel}>Open your mind to new possibilities</h1>
            <p className={styles.subtitle}>Share your thoughts and knowledge with the world</p>

        </div>
    );
}