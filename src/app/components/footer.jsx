import React from "react";
import styles from "./header.module.css"
import Logo from "./logo";
import Image from "next/image";

const Footer = () => {
  return (
    <header className={styles.footer}>
        <hr className={styles.hrFooter} />
        <Image src="/logo.png" alt="logo" width={1701} height={444} />
    </header>
  );
};

export default Footer;
