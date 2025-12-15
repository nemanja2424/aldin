'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Oblak from "./components/oblak";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.headerCTA}>
        <h2>Giveaways for free</h2>
        <a className={styles.button1}>Prijavi se</a>
      </div>
      <div className={styles.hero}>
        <div className={styles.oblik1}></div>
        <div className={styles.oblik2}></div>


        <div className={`${styles.heroSekcija} ${styles.levo}`}>
          <h1>Vidljivost brenda kroz ekskluzivne nagradne igre</h1>
          <h2>Naše kampanje nude brendovima snažnu vidljivost i direktan kontakt sa publikom.</h2>
          <h3>Aktivna zajednica i rastući domet.</h3>
          <a>Postanite sponzor</a>
        </div>
        <div className={styles.heroSekcija}>
          <Image src={"/hero.jpg"} width={1080} height={1440} className={styles.heroImg} alt="hero" />
        </div>
        <div className={styles.heroKartice}>
          <div className={styles.card}>
            
          </div>
          <div className={styles.card}>

          </div>
          <div className={styles.card}>

          </div>
          <div className={styles.card}>
sas
          </div>
        </div>
      </div>

      <Oblak />
    </div>
  );
}
