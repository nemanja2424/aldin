'use client';
import styles from "./page.module.css";
import Header from "./components/header";
import InfluencersCarousel from "./components/influencersCarousel";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.section}>
        <p>
          AKO NE ZNAŠ KAKO DA PODIGNEŠ BROJ SVOJIH PRATITELJA NA INSTAGRAMU I UNAPRIJEDIŠ SVOJE POSLOVANJE – MI SMO TU ZA VAS!
        </p>
        <p>
          KONTAKTIRAJ NAS I SAZNAJ KAKO SA SISTEMOM KOJI 100% RADI.
        </p>
        <InfluencersCarousel />
        <a href="/prijava" className={styles.button1}>POVEĆAJ PRATIONCE DANAS</a>
      </section>
      <hr className={styles.hr} />
      <section className={styles.line} >
        <p>24/7 PODRŠKA</p>
        <p>NIJE TI POTREBNO ISKUSTVO</p>
      </section>
      <hr className={styles.hr} />
      <section className={styles.section} >
        <p>Možda već mjesecima pokušavaš da probiješ Instagram.</p>

        <p>
          Objavljuješ.<br />
          Pokrećeš reklame.
        </p>

        <p>
          Napraviš kampanju, pa čekaš da se desi čudo.
        </p>

        <p>
          Pratioci dolaze sporo.<br />
          Reach slab.<br />
          Angažman kratak.
        </p>

        <p>
          A ono što najviše boli – gledaš druge profile kako rastu, iako znaš da
          tvoj brend vrijedi više, da imaš bolju ponudu i jaču priču.
        </p>

        <p>
          I tada se javi sumnja:<br />
          „Možda moj biznis jednostavno nije dovoljno zanimljiv.“
        </p>

        <p>
          Istina je – <strong>NIJE PROBLEM U TVOM BRENDU.</strong>
        </p>

        <p>
          Problem je u <strong>NEDOSTATKU PAŽNJE I SISTEMA.</strong>
        </p>

        <p>
          Bez pravog hajpa, algoritam radi protiv tebe.
        </p>


        <p>
          <strong>ZVUČI POZNATO?</strong>
        </p>

        <p>
          A ako ništa ne promijeniš…
        </p>

        <p>
          Umjesto da brendovi rade s tobom – ti gledaš tuđe saradnje.
        </p>

        <p>
          Umjesto da se o tvom profilu priča – ti skroluješ,
          pitajući se „kako su oni uspjeli“.
        </p>

        <p>
          Zbog toga je tu – <strong>SPORTOLOG GIVEAWAY.</strong>
        </p>

        
      </section>

      <section className={styles.benefitsSection}>
        <h3 className={styles.benefitsHeading}>ŠTA SVE DOBIJAŠ</h3>
        <ul className={styles.benefitsList}>
          <li><i className="fa-solid fa-check-double"></i> Ciljanu promociju pred ogromnom publikom koja već prati giveawayeve</li>
          <li><i className="fa-solid fa-check-double"></i> Brzi rast prepoznatljivosti brenda kroz viralni format nagradne igre</li>
          <li><i className="fa-solid fa-check-double"></i> Povećanje broja pratilaca i interakcija na tvom Instagram profilu</li>
          <li><i className="fa-solid fa-check-double"></i> Direktan dolazak potencijalnih kupaca na tvoj profil ili web stranicu</li>
          <li><i className="fa-solid fa-check-double"></i> Profesionalnu organizaciju i vođenje cijele kampanje bez stresa</li>
          <li><i className="fa-solid fa-check-double"></i> Realne rezultate – engagement, reach i prodajni potencijal</li>
        </ul>
      </section>

      <section className={styles.resultsSection}>
        <h3 className={styles.resultsHeading}>NAŠI REZULTATI</h3>
        <div className={styles.resultsGrid}>
          <div className={styles.resultCard}>
            <div className={styles.cardContent}>
              <h4 className={styles.cardLabel}>PRIJE</h4>
              <img src="/results/prije.jpg" alt="Prije" className={styles.resultImage} />
            </div>
          </div>
          <div className={styles.resultCard}>
            <div className={styles.cardContent}>
              <h4 className={styles.cardLabel}>POSLIJE</h4>
              <img src="/results/poslije.jpg" alt="Poslije" className={styles.resultImage} />
            </div>
          </div>
        </div>
      </section>
      
      <a href="/prijava" className={styles.button1} >ISKORISTI FINALNI POPUST</a>
    </div>
  );
}
