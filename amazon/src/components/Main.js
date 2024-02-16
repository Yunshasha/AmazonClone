import React from "react";
import styles from "../styles/Main.module.css";
import Product from "./Product";
import { useSelector } from "react-redux";

function Main() {
  const { firstRowProducts, secondRowProducts, thirdRowProducts } = useSelector(
    (state) => state.products
  );

  return (
    <>
      <div className={styles.home}>
        <div className={styles.home_container}>
          <div className={styles.spanner}>
            <img
              className={styles.home_image}
              src="https://m.media-amazon.com/images/I/71mOxe+DhZL._SX3000_.jpg"
              alt="spanner image"
            />
          </div>
          <div className={styles.home_productArea}>
            <div className={styles.home_row}>
              {firstRowProducts.map((item) => (
                <Product
                  key={item.id}
                  productId={item.id}
                  discription={item.discription}
                  price={item.price}
                  rating={item.rating}
                  imgSrc={item.imgSrc}
                />
              ))}
            </div>
            <div className={styles.home_row}>
              {secondRowProducts.map((item) => (
                <Product
                  key={item.id}
                  productId={item.id}
                  discription={item.discription}
                  price={item.price}
                  rating={item.rating}
                  imgSrc={item.imgSrc}
                />
              ))}
            </div>
            <div className={styles.home_row}>
              {thirdRowProducts.map((item) => (
                <Product
                  key={item.id}
                  productId={item.id}
                  discription={item.discription}
                  price={item.price}
                  rating={item.rating}
                  imgSrc={item.imgSrc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
