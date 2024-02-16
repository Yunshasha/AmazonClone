import React from "react";
import styles from "@/styles/Product.module.css";
import { useDispatch } from "react-redux";
import { AddToCart } from "@/store/productStore";

function Product({ productId, discription, price, rating, imgSrc }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(AddToCart({ id: productId }));
  };
  return (
    <div className={styles.product}>
      <div className={styles.product_info}>
        {discription ? <p>{discription}</p> : <p>No description</p>}
        <p className={styles.product_price}>
          <small>€</small> <strong>{price.toFixed(2)}</strong>
        </p>
        <div className={styles.product_rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={imgSrc} />
      <button onClick={handleClick}>Add to basket</button>
    </div>
  );
}

export default Product;
