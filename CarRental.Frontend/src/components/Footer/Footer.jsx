import React from 'react';
import {
  AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin,
} from 'react-icons/ai';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <h1>Some interesting text</h1>
        <div className={styles.socials}>
          <a href="https://google.com"><AiFillFacebook className={styles.icon} size={46} /></a>
          <a href="https://google.com"><AiFillTwitterCircle className={styles.icon} size={46} /></a>
          <a href="https://google.com"><AiFillInstagram className={styles.icon} size={46} /></a>
          <a href="https://google.com"><AiFillLinkedin className={styles.icon} size={46} /></a>
        </div>
      </div>
    </div>
  );
}
