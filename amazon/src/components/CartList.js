import React from "react";
import styles from "@/styles/CartList.module.css";
import { useDispatch } from "react-redux";
import { RemoveFromCart } from "@/store/productStore";

function CartList({ productId, img, discription, rating, price }) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(RemoveFromCart({ id: productId }));
  };
  return (
    <div className={styles.productList}>
      <div className={styles.product_left}>
        <img src={img} />
      </div>
      <div className={styles.product_right}>
        <div>{discription}</div>
        <div className={styles.product_Rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <div className={styles.product_footer}>
          <div className={styles.product_infoPrice}>{price} €</div>
          <button onClick={handleRemove}>remove</button>
        </div>
      </div>
    </div>
  );
}

export default CartList;
