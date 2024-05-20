"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Input from "@/app/components/input/input";
import Menu from "../../components/menu/page";
import Button from "@/app/components/button/button";
import Link from "next/link";
import useSWR from "swr";




const Userposts = () => {

    /*const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, mutate, error, isLoading } = useSWR(
        "https://jsonplaceholder.typicode.com/posts",
        fetcher
    );
    console.log(data);
    */
    return (
        <div className={styles.container}>
            <h2 className={styles.titel}>Dashboard</h2>
            <div className={styles.content}>
                <Menu />
                <div> <h3 className={styles.titel_h3}>My posts</h3>
                    <div className={styles.cards_container}>

                        <div className={styles.card}>
                            <Image
                                src="/photo.png"
                                width={500}
                                height={500}
                                alt="photo"
                                className={styles.img}>
                            </Image>
                            <h4 className={styles.title_card}>Always Hungry and Tired? Here Are 8 Potential Reasons Why</h4>
                            <div className={styles.btns}>
                                <Button url="/category/topic/1" text="View" />
                                <Button url="#" text="Delete" inverted />
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src="/photo.png"
                                width={500}
                                height={500}
                                alt="photo"
                                className={styles.img}>
                            </Image>
                            <h4 className={styles.title_card}>Always Hungry and Tired? Here Are 8 Potential Reasons Why</h4>
                            <div className={styles.btns}>
                                <Button url="/category/topic/2" text="View" />
                                <Button url="#" text="Delete" inverted />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userposts;
