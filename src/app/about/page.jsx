import React from "react";
import styles from './page.module.css'
import Button from "../components/button/button";
import Image from "next/image";

const About = () => {
    return (
        <div className={styles.container}>

            <h2 className={styles.titel}>About</h2>
            <p>At OpenMind, we believe in the power of diverse perspectives and
                the value of shared experiences. Our platform is designed to be a
                welcoming space where everyone can find something that resonates
                with them. Whether you're interested in life, self improvement,
                work, technology, media, or any other topic, our blog is a place
                where you can explore a wide range of subjects and engage with
                thoughtful content.
            </p>
            <p>
                Our mission is simple: to create a community where ideas can flow freely,
                and where every voice matters. <span className={styles.accent}>OpenMind is more than just a blog—it's a
                    platform for connection, inspiration, and discovery.</span> Here, you can read
                articles and opinions from people of all backgrounds and experiences,
                each bringing their unique insights to the table. And if you're interested
                in sharing your own thoughts, we encourage you to contribute! Whether
                you're a seasoned writer or just starting, <span span className={styles.accent}>it is the perfect place
                    to express yourself.</span>
            </p>
            <p>
                <span span className={styles.accent}>We value open-mindedness and inclusivity.</span> We believe that great conversations
                happen when people are open to different viewpoints, and that's exactly what
                we aim to foster. Our community is built on respect, understanding, and a
                shared curiosity about the world around us.
            </p>
            <p span className={styles.accent}>Let's explore the world of ideas together!</p>
            <Button url="/about" text="Write"></Button>
        </div>
    )
}

export default About;
