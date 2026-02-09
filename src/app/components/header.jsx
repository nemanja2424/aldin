import React from "react";
import styles from "./header.module.css"
import Logo from "./logo";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
        <Image src="/logo.png" alt="logo" width={1701} height={444} />
        <hr className={styles.hr} />
    </header>
  );
};

export default Header;
