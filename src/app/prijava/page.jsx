'use client'
import React, { useState, useEffect, useRef } from "react";
import styles from "./prijava.module.css";
import Header from "../components/header";

const PrijavaForm = () => {
  const [formData, setFormData] = useState({
    ime: "",
    zanimanje: "",
    telefonPrefix: "+381",
    telefonBroj: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Zatvori dropdown kad se klikne vani
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCountryDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const phoneCountries = [
    { code: "+387", icon: "/bosnia_and_herzegovina_round_icon_64.png" },
    { code: "+381", icon: "/serbia_round_icon_64.png" },
    { code: "+385", icon: "/croatia_round_icon_64.png" },
    { code: "+382", icon: "/montenegro_round_icon_64.png" }
  ];

  const handleCountrySelect = (code) => {
    setFormData(prev => ({
      ...prev,
      telefonPrefix: code
    }));
    setShowCountryDropdown(false);
  };

  const currentCountry = phoneCountries.find(c => c.code === formData.telefonPrefix);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Za ime - sprečavamo unos karaktera pre '@'
    if (name === "ime") {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    setError(""); // Očisti error kada korisnik počne da kuca
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formDataToSend = {
        ime: `@${formData.ime}`,
        zanimanje: formData.zanimanje,
        telefon: `${formData.telefonPrefix} ${formData.telefonBroj}`
      };

      const response = await fetch("/api/prijava", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Greška pri slanju prijave");
      }

      setSubmitted(true);
      setFormData({
        ime: "",
        zanimanje: "",
        telefonPrefix: "+381",
        telefonBroj: ""
      });

      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setError(err.message || "Greška pri slanju prijave. Pokušajte ponovo.");
      console.error("Form error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
        <Header />
      <div className={styles.formCard}>
        <h1 className={styles.title}>Postani Sponzor</h1>
        <p className={styles.subtitle}>Unesite vaše informacije i postanite deo naše zajednice</p>

        {submitted && (
          <div className={styles.successMessage}>
            ✓ Forma je uspešno poslata!
          </div>
        )}

        {error && (
          <div className={styles.errorMessage}>
            ✗ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="ime" className={styles.label}>Ime Instagram profila *</label>
            <div className={styles.inputWithPrefix}>
              <span className={styles.prefix}>@</span>
              <input
                type="text"
                id="ime"
                name="ime"
                value={formData.ime}
                onChange={handleChange}
                placeholder="username"
                required
                className={styles.inputWithBorder}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="zanimanje" className={styles.label}>Oblast kojom se bavite *</label>
            <input
              type="text"
              id="zanimanje"
              name="zanimanje"
              value={formData.zanimanje}
              onChange={handleChange}
              placeholder="Oblast kojom se bavite"
              maxLength="20"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Broj Telefona *</label>
            <div className={styles.phoneInputContainer}>
              <div className={styles.countrySelectWrapper} ref={dropdownRef}>
                <button
                  type="button"
                  className={styles.countryButton}
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                >
                  {currentCountry && (
                    <>
                      <img src={currentCountry.icon} alt="Flag" className={styles.flagIcon} />
                      <span>{currentCountry.code}</span>
                    </>
                  )}
                </button>
                
                {showCountryDropdown && (
                  <div className={styles.countryDropdown}>
                    {phoneCountries.map(country => (
                      <button
                        key={country.code}
                        type="button"
                        className={styles.countryOption}
                        onClick={() => handleCountrySelect(country.code)}
                      >
                        <img src={country.icon} alt="Flag" className={styles.flagIcon} />
                        <span>{country.code}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <input
                type="tel"
                name="telefonBroj"
                value={formData.telefonBroj}
                onChange={handleChange}
                placeholder="60 123 4567"
                required
                className={styles.phoneInput}
              />
            </div>
          </div>

          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? "Slanje u toku..." : "Pošalji prijavu"}
          </button>
        </form>

      </div>
    </div>
  );
};

export default PrijavaForm;
