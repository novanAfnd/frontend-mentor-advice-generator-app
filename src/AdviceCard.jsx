import React, { useState } from "react";
import patternDividerMobile from "./assets/images/pattern-divider-mobile.svg";
import patternDividerDesktop from "./assets/images/pattern-divider-desktop.svg";
import iconDice from "./assets/images/icon-dice.svg";

const AdviceCard = () => {
  // State untuk membuat button dice berputar saat diklik

  return (
    <div className="card">
      <h1 className="card__header">ADVICE # {"117"}</h1>
      <p className="card__text">"{"..."}"</p>
      <div className="card__divider"></div>
      <button className="card__button"></button>
    </div>
  );
};

export default AdviceCard;
