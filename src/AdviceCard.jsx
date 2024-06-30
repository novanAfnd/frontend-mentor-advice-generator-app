import React, { useState } from "react";
import patternDividerMobile from "./assets/images/pattern-divider-mobile.svg";
import patternDividerDesktop from "./assets/images/pattern-divider-desktop.svg";
import iconDice from "./assets/images/icon-dice.svg";

const AdviceCard = () => {
  // Baris kode untuk membuat tombol berputar saat diklik
  const [rotate, setRotate] = useState(false); // tetapkan dulu rotate = false

  function handleClick() {
    setRotate(true); // buat rotate menjadi true saat diklik

    setTimeout(() => {
      setRotate(false); // buat rotate menjadi false setelah 1 detik
    }, 1000);
  }

  return (
    <div className="card">
      <h1 className="card__header">ADVICE # {"117"}</h1>
      <p className="card__text">"{"..."}"</p>
      <div className="card__divider"></div>
      <button
        className={`card__button ${rotate === true ? "card__button-rotating" : ""}`}
        onClick={handleClick}
      ></button>
    </div>
  );
};

export default AdviceCard;
