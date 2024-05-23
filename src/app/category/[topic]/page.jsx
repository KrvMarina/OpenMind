"use client";
import React from "react";
import styles from './page.module.css'
import Image from "next/image";
import Link from "next/link";
import { IoEyeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { notFound } from "next/navigation";



async function getData(topic) {
    const res = await fetch(`http://localhost:3000/api/posts/${topic}`, {
        cache: "no-store",
    });
    if (!res.ok) {
        return notFound()
    }
    return res.json();
}

const Topic = async ({ params }) => {
    const data = await getData(params.topic);
    return (
        <div className={styles.container}>
            <div className={styles.cards_container}>
                {data.map((item) => (
                    <Link href={`/category/${params.topic}/${item._id}`} key={item._id}>
                        <div className={styles.card}>
                            <Image
                                src={item.img}
                                width={500}
                                height={500}
                                alt="photo"
                                className={styles.img}>
                            </Image>
                            <p className={styles.author}>
                                <RxAvatar className={styles.avatar} />{item.username}
                            </p>
                            <h4 className={styles.title_card}>{item.title}</h4>
                            <div className={styles.icons}>
                                <p><IoEyeSharp />500</p>
                                <p><FaHeart />98</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Topic;