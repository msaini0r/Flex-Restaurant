import React from "react";
import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="300" height="300" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$12</span>
      <p className={styles.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ullam
        officiis animi non sapiente. Voluptatem ab, qui beatae rerum nemo
        mollitia! Ut, reiciendis ullam? Omnis.
      </p>
    </div>
  );
};

export default PizzaCard;
