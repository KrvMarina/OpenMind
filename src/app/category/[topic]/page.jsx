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
            <h1>{decodeURIComponent(params.topic)}</h1>
            <div className={styles.cards_container}>
                <Link href="#" >
                    <div className={styles.card}>
                        <Image
                            src="/photo.png"
                            width={500}
                            height={500}
                            alt="photo"
                            className={styles.img}>
                        </Image>
                        <p className={styles.small_text}>
                            <RxAvatar className={styles.avatar} />Anna
                        </p>
                        <h4 className={styles.title_card}>Always Hungry and Tired? Here Are 8 Potential Reasons Why</h4>
                        <div className={styles.icons}>
                            <p><IoEyeSharp />200</p>
                            <p><FaHeart />68</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Topic;
