import React from "react";
import styles from "@/styles/Sidebar.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";

function Sidebar({ visible, setVisible }) {
  return (
    <>
      <div
        className={`${styles.container} ${visible && styles.container_visible}`}
      >
        <div className={styles.sidebar}>
          <div className={styles.sidebar_top}>
            <AccountCircleIcon />
            <span>Ciao,accedi</span>
            <CloseIcon onClick={() => setVisible(false)} />
          </div>
          <div className={styles.sidebar_content}>
            <div className={styles.sidebarList}>
              <span>Di tendenza</span>
              <li>Bestseller</li>
              <li>Novità</li>
              <li>I prodotti del moment</li>
            </div>
            <div className={styles.sidebarList}>
              <span>Dispositivi e contenuti digitali</span>
              <li>Amazon Prime Video</li>
              <li>Amazon Music</li>
              <li>Amazon Photos</li>
              <li>Echo e Alexa</li>
              <li>Amazon Fire TV</li>
              <li>E-reader e eBook Kindle</li>
              <li>Appstore per Android</li>
            </div>
            <div className={styles.sidebarList}>
              <span>Scegli per categoria</span>
              <li>Libri</li>
              <li>Musica,FIlm e TV</li>
              <li>Videogiochi e Console</li>
              <li>Elettonica e Informatica</li>
              <li>Mostra tutto</li>
            </div>
            <div className={styles.sidebarList}>
              <span>Programmi e caratteristiche</span>
              <li>Made in Italy</li>
              <li>Handmade</li>
              <li>Luxury Stores</li>
              <li>Personalizzato da Amazon</li>
            </div>
            <div className={styles.sidebarList}>
              <span>Dispositivi e contenuti digitali</span>
              <li>Amazon Prime Video</li>
              <li>Amazon Music</li>
              <li>Amazon Photos</li>
              <li>Echo e Alexa</li>
              <li>Amazon Fire TV</li>
              <li>E-reader e eBook Kindle</li>
              <li>Appstore per Android</li>
            </div>
          </div>
        </div>
      </div>
      <div
        className={visible && styles.overlay}
        onClick={() => setVisible(false)}
      ></div>
    </>
  );
}

export default Sidebar;
