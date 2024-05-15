import React from "react";
import styles from './page.module.css'
import Image from "next/image";
import Link from "next/link";
import { IoEyeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

async function getData() {
    const res = await fetch("http://localhost:3000/api/posts", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export async function generateMetadata({ params }) {

    const data = await getData(params.id)
    return {
        title: data.title,
        description: "page",
    };
}

const Topic = async ({ params }) => {

    const data = await getData();
    return (
        <div className={styles.container}>
            <h2 className={styles.titel}>{decodeURIComponent(params.topic)}</h2>
            <div className={styles.cards_container}>

                {data.map((item) =>
                (
                    <Link href={`./topic/${item._id}`} key={item._id} >
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
                ))};
            </div>

        </div>
    )
}

export default Topic;
