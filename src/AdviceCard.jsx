import React, { useState, useEffect } from "react";
import patternDividerMobile from "./assets/images/pattern-divider-mobile.svg";
import patternDividerDesktop from "./assets/images/pattern-divider-desktop.svg";
import iconDice from "./assets/images/icon-dice.svg";

const AdviceCard = () => {
  const [adviceId, setAdviceId] = useState("...");
  const [adviceText, setAdviceText] = useState("...");
  const [rotate, setRotate] = useState(false); // tetapkan dulu rotate = false

  // URL untuk adivce pertama (117) dan URL untuk advice setelahnya
  const FIRST_ADVICE_URL = "https://api.adviceslip.com/advice/117"; // advice default
  const RANDOM_ADVICE_URL = "https://api.adviceslip.com/advice"; // advice random setelah advice default

  // Untuk pertama kali render advice 117
  useEffect(() => {
    fetchAdvice(FIRST_ADVICE_URL);
  }, []);

  // Selanjutnya render advice random
  const fetchAdvice = (url) => {
    fetch(url)
      .then((respon) => respon.json())
      .then((data) => {
        setAdviceId(data.slip.id);
        setAdviceText(data.slip.advice);
      });
  };

  function handleClick() {
    setRotate(true); // buat rotate menjadi true saat diklik

    setTimeout(() => {
      setRotate(false); // buat rotate menjadi false setelah 1 detik
      fetchAdvice(RANDOM_ADVICE_URL); // kita pass variable random advice
    }, 1000);
  }

  return (
    <div className="card">
      <h1 className="card__header">ADVICE # {adviceId}</h1>
      <p className="card__text">"{adviceText}"</p>
      <div className="card__divider"></div>
      <button
        className={`card__button ${rotate === true ? "card__button-rotating" : ""}`}
        onClick={handleClick}
      ></button>
    </div>
  );
};

export default AdviceCard;
