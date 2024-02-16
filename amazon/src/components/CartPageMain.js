import React from "react";
import styles from "@/styles/CartPageMain.module.css";
import { useSelector } from "react-redux";
import CartList from "./CartList";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useMemo } from "react";
import { totalPriceCal } from "@/assets/totalPrice";

function CartPageMain() {
  const { cartList } = useSelector((state) => state.products);
  const totalPrice = useMemo(() => {
    return cartList.length > 0 ? totalPriceCal(cartList) : 0;
  }, [cartList]);

  return (
    <>
      <div className={styles.home}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div>
              <div className={styles.leftInfo}>
                <span>Carrello</span>
                <span>Prezzo</span>
              </div>
              <div className={styles.leftList}>
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
              <div className={styles.leftPrice}>
                <span>
                  Totale provvisorio ({cartList.length} articoli):{" "}
                  <b>{totalPrice.toFixed(2)} €</b>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightInfo}>
              <div>
                <CheckCircleIcon className={styles.checked} />
              </div>
              <div className={styles.rightInfo_content}>
                <p>
                  <strong>Spedizione GRATUITA </strong> disponibile per il tuo
                  ordine{" "}
                </p>
                <a> Si applicano restrizioni</a>
                <p>
                  Selezionare questa opzione al momento della conferma
                  dell’ordine.{" "}
                </p>
              </div>
            </div>
            <div className={styles.rightOrder}>
              <p>
                Totale provvisorio ({cartList.length} articoli):{" "}
                <b>{totalPrice.toFixed(2)} €</b>
              </p>
              <div>
                <input type="checkbox" />
                <label>Questo ordine contiene un regalo</label>
              </div>
              <button>
                <span>Procedi all'ordine</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPageMain;
