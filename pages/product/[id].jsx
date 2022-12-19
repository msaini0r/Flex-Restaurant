import React, { useState } from "react";
import styles from "../../styles/Product.module.css";
import Image from "next/image";

const Product = () => {
  // const [size, setSize] = useState(0);
  // const pizza = {
  //   id: 1,
  //   img: "/img/pizza.png",
  //   name: "CAMPAGNOLA",
  //   price: [19.9, 23.9, 27.9],
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis ut aspernatur veniam a dolor commodi tempore fuga perspiciatis! Quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis ut aspernatur veniam a dolor commodi tempore fuga perspiciatis! Quae!",
  // };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} alt="" objectFit="contain" layout="fill" />
        </div>
      </div>
      <div className={styles.right}>
        <h2 className={styles.title}>{pizza.name}</h2>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input className={styles.checkbox} type="checkbox" id="double" name="double" />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input className={styles.checkbox} type="checkbox" id="cheese" name="cheese" />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input className={styles.checkbox} type="checkbox" id="spicy" name="spicy" />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input className={styles.checkbox} type="checkbox" id="garlic" name="garlic" />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
