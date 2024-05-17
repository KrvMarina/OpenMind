"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import styles from "./page.module.css";
import Image from "next/image";
import Input from "@/app/components/input/input";
import Menu from "../../components/menu/page";
import Button from "@/app/components/button/button";
import { useSession } from "next-auth/react";




const categories = [
    "Life",
    "Self Improvement",
    "Work",
    "Technology",
    "Software Development",
    "Media",
    "Culture",
    "World"
];

const Add = () => {
    const session = useSession();
    console.log(session);
    //const router = useRouter();

    //NEW WAY TO FETCH DATA
    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, mutate, error, isLoading } = useSWR(
        "/api/posts",
        fetcher
    );

    console.log(data);

    return (
        <div className={styles.container}>
            <h2 className={styles.titel}>Dashboard</h2>
            <div className={styles.content}>
                <Menu />
                <form className={styles.form}>
                    <h3 className={styles.titel_h3}>Add new post</h3>
                    <label className={styles.label}>Category</label>
                    <select defaultValue="" className={styles.category_select}>
                        <option value="" disabled>
                            Choose your category
                        </option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>

                    <Input type="text" id="title" placeholder="Enter title" />
                    <Input type="text" id="desc" placeholder="Enter desc" />
                    <Input type="text" id="image" placeholder="Enter image" />
                    <label className={styles.label}>Content</label>
                    <textarea
                        placeholder="Enter content"
                        className={styles.text_area}
                        rows="10"
                    ></textarea>
                    <Button url="#" text="Post" width="100%" />
                </form>
            </div>
        </div>
    )
}

export default Add;
