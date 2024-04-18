"use client";
import Image from "next/image";
import styles from "./page.module.css";
import global from "./globals.css";
import Button from "./components/button/button";
//import Hero from "public/hero.png";
//import Button from "@/components/Button/Button";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.text_block}>
                <h1 className={styles.titel}>Open your mind to new possibilities</h1>
                <p className={styles.subtitle}>Share your thoughts and knowledge with the world</p>
                <Button url="/about" text="Start"></Button>
            </div>
        </div>
    );
}