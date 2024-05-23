import React from "react";
import styles from './page.module.css'
import Image from "next/image";
import Link from "next/link";
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
            <h2 className={styles.titel}>{decodeURIComponent(params.topic)}</h2>
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
                                {item.username}
                            </p>
                            <h4 className={styles.title_card}>{item.title}</h4>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Topic;