import React from "react";
import styles from './page.module.css';
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(_id) {
    const res = await fetch(`http://localhost:3000/api/posts/category/${_id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return notFound()
    }

    return res.json();
}

const Post = async ({ params }) => {
    const data = await getData(params.id);

    return (
        <div className={styles.container}>
            <h2 className={styles.titel}>{data.title}</h2>
            <div className={styles.author}>
                <p className={styles.avatar}>
                    {data.username}
                </p>
            </div>
            <Image
                src={data.img}
                width={500}
                height={500}
                alt="photo"
                className={styles.img}>
            </Image>
            <p className={styles.post_text}>
                {data.desc}
            </p>
        </div>
    );
};


export default Post;
