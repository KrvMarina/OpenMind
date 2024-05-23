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

async function getData() {
    const res = await fetch("http://localhost:3000/api/posts", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}


export default async function Home() {
    const data = await getData();
    const popularPosts = data.slice(0, 3);
    return (
        <div className={styles.container}>
            <div className={styles.text_block}>
                <h1 className={styles.titel}>Open your mind to new possibilities</h1>
                <p className={styles.subtitle}>Share your thoughts and knowledge with the world</p>
                <Button url="/about" text="Start"></Button>
            </div>

            <h3 className={styles.titel_h3}>Our posts</h3>
            <div className={styles.cards_container}>
                {popularPosts.map((item) => (
                    <Link href={`/category/topic/${item._id}`} key={item._id}>
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

