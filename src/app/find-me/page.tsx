// pages/find-me.tsx

import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/FindMe.module.css"; // Assuming you'll add some CSS for styling

const FindMePage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email: ${email}\nMessage: ${message}`);
    // You can handle form submission to a backend or email service here
  };

  return (
    <>
      <Head>
        <title>Find Me - Contact and Location</title>
        <meta
          name="description"
          content="Find me page with contact form and location"
        />
      </Head>
      <div className={styles.container}>
        <section className={styles.header}>
          <h1>Find Me</h1>
          <p>
            Looking for me? Here’s how you can get in touch or find my location.
          </p>
        </section>

        <section className={styles.contact}>
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </section>

        <section className={styles.location}>
          <h2>My Location</h2>
          <p>Here's where you can find me:</p>
          <div className={styles.map}>
            {/* Replace with a real map (Google Maps, Mapbox, etc.) */}
            <p>Map would be displayed here.</p>
          </div>
        </section>

        <section className={styles.socialMedia}>
          <h2>Follow Me</h2>
          <ul>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default FindMePage;
