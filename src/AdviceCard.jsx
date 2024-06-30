import React, { useState, useEffect } from "react";
import patternDividerMobile from "./assets/images/pattern-divider-mobile.svg";
import patternDividerDesktop from "./assets/images/pattern-divider-desktop.svg";
import iconDice from "./assets/images/icon-dice.svg";

const AdviceCard = () => {
  const [adviceId, setAdviceId] = useState("...");
  const [adviceText, setAdviceText] = useState("...");
  const [rotate, setRotate] = useState(false); // tetapkan dulu rotate = false

  // Aku tidak menggunakan useEffect karena advice akan ditampilkan setelah button diklik
  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((result) => result.json())
      .then((data) => {
        setAdviceId(data.slip.id);
        setAdviceText(data.slip.advice);
      });
  };

  function handleClick() {
    setRotate(true); // buat rotate menjadi true saat diklik

    setTimeout(() => {
      setRotate(false); // buat rotate menjadi false setelah 1 detik
      fetchAdvice(); // tampilkan advice saat animasi dice berhenti berputar
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
