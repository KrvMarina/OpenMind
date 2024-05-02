import React from "react";
import styles from './input.module.css'


const Input = ({ type, id, placeholder }) => {

    return (
        <div className={styles.container}>
            <label htmlFor={id} className={styles.label}>
                {String(id).charAt(0).toUpperCase() + String(id).slice(1).toLowerCase()}
            </label>
            <input type={type} id={id} placeholder={placeholder} className={styles.input} />
        </div>
    )
}

export default Input;
