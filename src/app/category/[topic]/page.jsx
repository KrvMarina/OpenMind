import React from "react";
import styles from './page.module.css'
import Image from "next/image";
import Link from "next/link";
import { IoEyeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

const Topic = ({ params }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.titel}>{decodeURIComponent(params.topic)}</h2>
            <div className={styles.cards_container}>
                <Link href="./topic/1">
                    <div className={styles.card}>
                        <Image
                            src="/photo.png"
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

                <Link href="/topic/2" >
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

                <Link href="/topic/3" >
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
            </div>
        </div>
    )
}

export default Topic;
