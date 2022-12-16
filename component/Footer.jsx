import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/legacy/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="" objectFit="cover" layout="fill" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <div className={styles.motto}>
            <h2>OH YES, WE DO. THE FLEX PIZZA, WELL BAKED SLICE OF PIZZA.</h2>
          </div>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTRAUNTS</h1>
          <p className={styles.text}>
            180 M, Model Town Road.
            <br /> India, 14032
            <br /> 012 457 8956.
          </p>
          <p className={styles.text}>
            10 Street, Urban State.
            <br /> India, 10578
            <br /> 912 753 8642.
          </p>
          <p className={styles.text}>
            206 Block - A, City Center.
            <br /> India, 95467
            <br /> 874 3698 1245.
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
