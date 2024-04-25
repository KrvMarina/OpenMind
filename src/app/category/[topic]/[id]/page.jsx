import React from "react";
import styles from './page.module.css';
import { RxAvatar } from "react-icons/rx";
import Image from "next/image";


const Post = ({ tags }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.titel}>Always Hungry and Tired? Here Are 8 Potential Reasons Why</h2>
            <p className={styles.author}>
                <RxAvatar className={styles.avatar} />Anna
            </p>
            <Image
                src="/photo.png"
                width={500}
                height={500}
                alt="photo"
                className={styles.img}>
            </Image>

            <p>
                While everyone has different needs, Mercer says that the Valencia diet generally aligns with current dietary guidelines (as long as you're eating adequate amounts).

                There isn’t much research or scientific evidence specifically supporting the Valencia diet, but because it's so similar to the Mediterranean diet, Mercer says some of the studies around that can apply—especially when you consider the emphasis on plant-based eating.

                “In terms of the reduction of meat consumption, we often see less burden on our kidneys, and lower cholesterol levels,” Mercer explains.

                Not only that, the Valencia diet may be less restrictive than other fad diets. “Since the Valencia diet emphasizes more of a change in the types of food we eat rather than restricting food/calories, it is more balanced and sustainable than some other popular diets,” Mercer says. “It is always better to add in more variety to our foods than to restrict food groups.”

                She adds that the diet may be especially good for anyone interested in eating more whole foods or transitioning to more of a plant-based way of eating, along with anyone concerned about their heart health.
            </p>

        </div>
    );
};


export default Post;
