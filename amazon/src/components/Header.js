import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import CartPanel from "@/components/CartPanel";
import { useSelector } from "react-redux";
import Link from "next/link";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";

function Header() {
  const { cartList } = useSelector((state) => state.products);
  const [isShow, setIsShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleClickTutte = () => {
    setVisible(true);
  };
  return (
    <>
      <Sidebar visible={visible} setVisible={setVisible} />
      <div className={styles.header}>
        {isShow && <CartPanel setIsShow={setIsShow} />}
        <Link href="/">
          <img
            className={styles.header_logo}
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
        <div className={styles.header_tutte} onClick={handleClickTutte}>
          <MenuIcon />
          <span>Tutte</span>
        </div>
        <div className={styles.header_search}>
          <input className={styles.header_searchInput} type="text" />
          <SearchIcon className={styles.header_searchIcon} />
        </div>
        <div className={styles.header_nav}>
          <div className={styles.header_option}>
            <span className={styles.header_optionLineOne}>
              {" "}
              Hello <span>guest</span>
            </span>
            <span className={styles.header_optionLineTwo}>Sign in</span>
          </div>
          <div className={styles.header_option}>
            <span className={styles.header_optionLineOne}> Returns</span>
            <span className={styles.header_optionLineTwo}>& Orders</span>
          </div>

          <div className={styles.header_option}>
            <span className={styles.header_optionLineOne}> Your</span>
            <span className={styles.header_optionLineTwo}>Prime</span>
          </div>

          <div
            className={styles.header_optionBasket}
            onMouseEnter={() => setIsShow(true)}
          >
            <Link href="./cartPage" className={styles.header_optionBasket}>
              <ShoppingCartCheckoutIcon />
              <span
                className={`  ${styles.header_optionLineTwo} ${styles.header_basketCount}  `}
              >
                {cartList.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
