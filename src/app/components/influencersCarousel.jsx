'use client';
import { useEffect, useRef, useState } from 'react';
import styles from '../page.module.css';

export default function InfluencersCarousel() {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const influencers = [
    { name: 'Ilda Humić', image: '/influencers/Ilda.png' },
    { name: 'Nezira Muhović', image: '/influencers/nezira.jfif' },
    { name: 'Aldin Hasić', image: '/influencers/aldin.jpg' },
    { name: 'Amar Velagić', image: '/influencers/amar.webp' },
    { name: 'Ajla Musić', image: '/influencers/ajla.jfif' },
    { name: 'Naida Bojnakova', image: '/influencers/naida.jpg' },
    { name: 'Namik Djulić (Nuni)', image: '/influencers/nuni.jpg' },
    { name: 'Veki', image: '/influencers/veki.jpg' },
    { name: 'Biljana Petrović', image: '/influencers/biljana.jfif' },
    { name: 'Vanja Veljić', image: '/influencers/Vanja.png' },
    { name: 'Teodora Popovska', image: '/influencers/teodora.jpg' },
    { name: 'Ela Jerković', image: '/influencers/ela.jpeg' },
    { name: 'Marija Ignjatović', image: '/influencers/marija.png' },
    { name: 'Luna Djogani', image: '/influencers/luna.png' },
    { name: 'Tijana Milentijević', image: '/influencers/tijana.jpg' },
  ];

  // Na mobilnom: 20x dupliranje za infinite loop
  // Na desktopu: obični niz od 15
  const displayInfluencers = isMobile 
    ? Array(20).fill(null).flatMap(() => influencers)
    : influencers;

  useEffect(() => {
    // Proverite veličinu ekrana
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isMobile) return;

    // Čekaj da se DOM renderira
    setTimeout(() => {
      // Postavi scroll u sredinu
      const singleSetWidth = scrollContainer.scrollWidth / 20;
      scrollContainer.scrollLeft = singleSetWidth * 9.5;
    }, 0);

    let isResetting = false;

    const handleScroll = () => {
      if (isResetting) return;

      const scrollLeft = scrollContainer.scrollLeft;
      const singleSetWidth = scrollContainer.scrollWidth / 20;
      const midpoint = singleSetWidth * 9.5;

      // Ako dosegneš početak prva kompleta
      if (scrollLeft < singleSetWidth) {
        isResetting = true;
        scrollContainer.scrollLeft = midpoint;
        setTimeout(() => {
          isResetting = false;
        }, 50);
      }
      // Ako dosegneš kraj zadnjeg kompleta
      else if (scrollLeft > midpoint + singleSetWidth * 9) {
        isResetting = true;
        scrollContainer.scrollLeft = midpoint;
        setTimeout(() => {
          isResetting = false;
        }, 50);
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <section className={styles.influencersSection}>
      <h2 className={styles.influencersTitle}>INFLUENSERI SA KOJIMA SMO SURAĐIVALI</h2>
      <div className={styles.influencersGrid} ref={scrollRef}>
        {displayInfluencers.map((influencer, index) => (
          <div key={index} className={styles.influencerCard}>
            <div className={styles.influencerCircle}>
              <img src={influencer.image} alt={influencer.name} />
            </div>
            <p className={styles.influencerName}>{influencer.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
