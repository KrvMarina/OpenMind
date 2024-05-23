"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Input from "@/app/components/input/input";
import Menu from "../../components/menu/page";
import Button from "@/app/components/button/button";
import Link from "next/link";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";




const Userposts = () => {

    const session = useSession();
    const router = useRouter();

    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, mutate, error, isLoading } = useSWR(
        `/api/posts?username=${session?.data?.user.username}`,
        fetcher
    );
    console.log(data);

    if (session.status === "loading") {
        return <p>Loading...</p>;
    }

    if (session.status === "unauthenticated") {
        router?.push("/dashboard/signin");
    }

    const handleDelete = async (id) => {
        try {
            await fetch(`/api/posts/categoty/${id}`, {
                method: "DELETE",
            });
            mutate();
        } catch (err) {
            console.log(err);
        }
    };

    if (session.status === "authenticated") {
        return (
            <div className={styles.container}>
                <h2 className={styles.titel}>Dashboard</h2>
                <div className={styles.content}>
                    <Menu username={session.data.user.username} />
                    <div> <h3 className={styles.titel_h3}>My posts</h3>
                        <div className={styles.cards_container}>
                            {isLoading
                                ? "loading"
                                : data?.map((post) => (
                                    <div className={styles.card} key={post._id}>
                                        <Image
                                            src={post.img}
                                            width={500}
                                            height={500}
                                            alt="photo"
                                            className={styles.img}>
                                        </Image>

                                        <h4 className={styles.title_card}>{post.title}</h4>
                                        <button
                                            className={styles.delete}
                                            onClick={() => handleDelete(post._id)}
                                        >
                                            Delete
                                        </button>

                                        <button>
                                            View
                                        </button>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Userposts;
