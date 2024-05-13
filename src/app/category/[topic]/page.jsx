import React from "react";
import styles from './page.module.css'
import Image from "next/image";
import Link from "next/link";
import { IoEyeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

const Topic = async ({ params }) => {

    const data = await getData();
    return (
        <div className={styles.container}>
            <h2 className={styles.titel}>{decodeURIComponent(params.topic)}</h2>
            <div className={styles.cards_container}>
                <Link href="./topic/1">
                    <div className={styles.card}>
                        <Image
                            src="https://images.unsplash.com/photo-1556386734-4227a180d19e?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            width={500}
                            height={500}
                            alt="photo"
                            className={styles.img}>
                        </Image>
                        <p className={styles.author}>
                            <RxAvatar className={styles.avatar} />Anna
                        </p>
                        <h4 className={styles.title_card}>Always Hungry and Tired? Here Are 8 Potential Reasons Why</h4>
                        <div className={styles.icons}>
                            <p><IoEyeSharp />200</p>
                            <p><FaHeart />68</p>
                        </div>
                    </div>
                </Link>

                <Link href="/categoty/topic/2" >
                    <div className={styles.card}>
                        <Image
                            src="/photo.png"
                            width={500}
                            height={500}
                            alt="photo"
                            className={styles.img}>
                        </Image>
                        <p className={styles.author}>
                            <RxAvatar className={styles.avatar} />Alan
                        </p>
                        <h4 className={styles.title_card}>10 Ways to Lose More Weight Walking</h4>
                        <div className={styles.icons}>
                            <p><IoEyeSharp />100</p>
                            <p><FaHeart />28</p>
                        </div>
                    </div>
                </Link>

                <Link href="/categoty/topic/3" >
                    <div className={styles.card}>
                        <Image
                            src="/photo.png"
                            width={500}
                            height={500}
                            alt="photo"
                            className={styles.img}>
                        </Image>
                        <p className={styles.author}>
                            <RxAvatar className={styles.avatar} />Nik
                        </p>
                        <h4 className={styles.title_card}>The Basics of Body Recomposition</h4>
                        <div className={styles.icons}>
                            <p><IoEyeSharp />500</p>
                            <p><FaHeart />98</p>
                        </div>
                    </div>
                </Link>
                {data.map((item) =>
                (
                    <Link href={`/category/topic/${item.id}`} key={item.id} >
                        <div className={styles.card}>
                            <Image
                                src="/photo.png"
                                width={500}
                                height={500}
                                alt="photo"
                                className={styles.img}>
                            </Image>
                            <p className={styles.author}>
                                <RxAvatar className={styles.avatar} />Nik
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
