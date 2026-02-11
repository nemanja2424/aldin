'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";

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
        <Image
          src="/profile.png"
          alt="LOGO"
          width={1751}
          height={919}
          className={styles.heroSlika}
        />
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
          Danas ne pobjeđuju najbolji proizvodi.
        </p>

        <p>
          Pobjeđuju oni koji znaju kako da privuku masu i zadrže fokus publike.
        </p>

        <p>
          Ako ne znaš kako da napraviš kampanju koju ljudi dijele, komentarišu i pamte –
          ostaješ neprimijećen.
        </p>

        <p>
          Tvoj brend, tvoje nagrade i tvoj potencijal ostaju neiskorišteni.
        </p>

        <p>
          <strong>ZVUČI POZNATO?</strong>
        </p>

        <p>
          A ako ništa ne promijeniš…
        </p>

        <p>
          Vrijeme prolazi, a ti gledaš sa strane.
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
      <a href="/prijava" className={styles.button1} >PRIJAVI SE</a>
    </div>
  );
}
