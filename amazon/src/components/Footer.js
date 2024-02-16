import React from "react";
import styles from "@/styles/Footer.module.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.footer}>
      <div className={styles.footer_toTop}>
        <a onClick={scrollToTop}>to Top</a>
      </div>
      <div className={styles.footer_info}>
        <div className={styles.info_content}>
          <div className={styles.info_list}>
            <span className={styles.info_title}>To get to know us better</span>
            <ul>
              <li>
                <a>Job Opportunities</a>
              </li>
              <li>
                <a>Information about Amazon</a>
              </li>
              <li>
                <a>Sustainability</a>
              </li>
            </ul>
          </div>
          <div className={styles.info_list}>
            <span className={styles.info_title}>Methods of Amazon payment</span>
            <ul>
              <li>
                <a>Methods of payment</a>
              </li>
              <li>
                <a>Amazon Currency Converter</a>
              </li>
              <li>
                <a>Gift vouchers</a>
              </li>
              <li>
                <a>Recharging online</a>
              </li>
            </ul>
          </div>
          <div className={styles.info_list}>
            <span className={styles.info_title}>Do you need help?</span>
            <ul>
              <li>
                <a>Costs and shipping methods</a>
              </li>
              <li>
                <a>Amazon Prime</a>
              </li>
              <li>
                <a>Return or replace items</a>
              </li>
              <li>
                <a>View or track an order</a>
              </li>
              <li>
                <a>Recycling</a>
              </li>
            </ul>
          </div>
        </div>
        <img
          className={styles.footer_logo}
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </div>
      <div className={styles.footer_copyRight}>
        <span>&copy;copyright</span>
      </div>
    </div>
  );
}

export default Footer;
