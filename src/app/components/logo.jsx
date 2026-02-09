import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <span className={styles.logoText}>
        IZGRADI
      </span>
      <div className={styles.logoBottom}>
        <span className={styles.logoLichni}>
          SVOJ
        </span>
        <span className={styles.logoBrend}>
          PROFIL
        </span>
        <span className={styles.logoGift}>
          <FontAwesomeIcon icon={faGift} className={styles.logoIcon} />
        </span>
      </div>
    </div>
  );
};

export default Logo;
