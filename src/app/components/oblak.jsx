'use client';
import { useState, useEffect } from "react";
import styles from "./oblak.module.css";

export default function Oblak() {
  const texts = [
    "Prvi red teksta",
    "Drugi red teksta",
    "Treći red teksta"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.oblak}>
      <div className={styles.krug}></div>
      <p key={currentIndex}>{texts[currentIndex]}</p>
    </div>
  );
}
