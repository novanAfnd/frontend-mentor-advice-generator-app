import React from "react";
import patternDividerMobile from "./assets/images/pattern-divider-mobile.svg";
import patternDividerDesktop from "./assets/images/pattern-divider-desktop.svg";
import iconDice from "./assets/images/icon-dice.svg";

const AdviceCard = () => {
  return (
    <div className="card">
      <h1 className="card__header">ADVICE #</h1>
      <p className="card__text">Lorem ipsum m.</p>
      <div className="card__divider"></div>
      <button className="card__button">
        <img src={iconDice} alt="dice" />
      </button>
    </div>
  );
};

export default AdviceCard;
