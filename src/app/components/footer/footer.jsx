"use client"

import React from 'react';
import styles from './page.module.css';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const mailchimpURL = "https://gmail.us22.list-manage.com/subscribe/post?u=2ed8ab686e8b57b455865b10c&id=b85b20dbd2";

const SimpleForm = ({ onSubmitted }) => {
    const [email, setEmail] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitted({ EMAIL: email });
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h3 className={styles.titel_h3} >Get our newsletter</h3>
            <div className={styles.subscribe}>
                <input
                    className={styles.input}
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" className={styles.inverted}>Subscribe</button>
            </div>
        </form>
    );
};

const Footer = () => (
    <div className={styles.container}>
        <p>©2024 OpenMind. All rights reserved.</p>
        <MailchimpSubscribe
            url={mailchimpURL}
            render={({ subscribe, status, message }) => (
                <div>
                    <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
                    {status === 'sending' && <div className={styles.message_status}>Sending...</div>}
                    {status === 'error' && (
                        <div className={styles.message_status} dangerouslySetInnerHTML={{ __html: message }} />
                    )}
                    {status === 'success' && <div className={styles.message_status}>Subscribed!</div>}
                </div>
            )}
        />
    </div>
);

export default Footer;
