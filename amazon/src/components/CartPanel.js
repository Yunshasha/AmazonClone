import styles from "@/styles/CartPanel.module.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useMemo } from "react";
import CartList from "./CartList";
import { ClearCart } from "@/store/productStore";
import { totalPriceCal } from "@/assets/totalPrice";

function CartPanel({ setIsShow }) {
  const { cartList } = useSelector((state) => state.products);
  const totalPrice = useMemo(() => {
    return cartList.length > 0 ? totalPriceCal(cartList) : 0;
  }, [cartList]);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(ClearCart());
  };
  return (
    <div className={styles.cartPanel} onMouseLeave={() => setIsShow(false)}>
      <div className={styles.cartPanel_info}>
        <div className={styles.cartPanel_infoLineOne}>
          <span>Cart</span> <button onClick={handleClear}>clear all</button>
        </div>
        <div className={styles.cartPanel_infoLineTwo}>
          Total {cartList.length} items: {totalPrice.toFixed(2)} €
        </div>
      </div>
      <div className={styles.cartPanel_list}>
        {cartList.length > 0 ? (
          <ul>
            {cartList.map((product) => (
              <CartList
                key={product.id}
                productId={product.id}
                img={product.imgSrc}
                discription={product.discription}
                rating={product.rating}
                price={product.price}
              />
            ))}
          </ul>
        ) : (
          <p>No items yet</p>
        )}
      </div>
    </div>
  );
}

export default CartPanel;
