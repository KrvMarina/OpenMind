import React from "react";
import styles from './page.module.css';
import { RxAvatar } from "react-icons/rx";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {

    const data = await getData(params.id)
    return {
        title: data.title,
        description: "page",
    };
}
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
                    <RxAvatar className={styles.icon} />{data.username}
                </p>
                <p className={styles.heart}>
                    <FaHeart className={styles.icon} />68
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
