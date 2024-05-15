"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/button/button";
import Link from "next/link";
import { IoEyeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { FaPerson } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { IoPeople } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { getPosts } from "./api/posts/route";

const categories = [
    {
        href: "/category/Life",
        icon: <FaHeart />,
        title: "Life"
    },
    {
        href: "/category/Self Improvement",
        icon: <FaPerson />,
        title: "Self Improvement"
    },
    {
        href: "/category/Work",
        icon: <MdOutlineWork />,
        title: "Work"
    },
    {
        href: "/category/Technology",
        icon: <GrTechnology />,
        title: "Technology"
    },
    {
        href: "/category/Software Development",
        icon: <HiMiniComputerDesktop />,
        title: "Software Development"
    },
    {
        href: "/category/Media",
        icon: <FaPerson />,
        title: "Media"
    },
    {
        href: "/category/Culture",
        icon: <IoPeople />,
        title: "Culture"
    },
    {
        href: "/category/World",
        icon: <BiWorld />,
        title: "World"
    }
];

export default function Home() {
    //const res = await getPosts();
    // console.log(res);
    return (
        <div className={styles.container}>
            <div className={styles.text_block}>
                <h1 className={styles.titel}>Open your mind to new possibilities</h1>
                <p className={styles.subtitle}>Share your thoughts and knowledge with the world</p>
                <Button url="/about" text="Start"></Button>
            </div>

            <h3 className={styles.titel_h3}>Popular posts</h3>
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

                <Link href="./topic/2" >
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

                <Link href="./topic/3" >
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

            <h3 className={styles.titel_h3}>Choose your category</h3>
            <div className={styles.category_content}>
                {categories.map((category, index) => (
                    <Link key={index} href={category.href} >
                        <div className={styles.category_card}>
                            <h4 className={styles.title_card_category}>{category.icon}{category.title}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

