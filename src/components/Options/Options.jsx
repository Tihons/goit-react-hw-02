import React from "react";
import css from "./Options.module.css";

export const Options = ({
  checking,
  onHandleClick,
  onHandleClickReset,
  params: [good, neutral, bad],
}) => {
  return (
    <div className={css.optionsBox}>
      <button onClick={() => onHandleClick(good)}>Good</button>
      <button onClick={() => onHandleClick(neutral)}>Neutral</button>
      <button onClick={() => onHandleClick(bad)}>Bad</button>
      {checking && <button onClick={onHandleClickReset}>Reset</button>}
    </div>
  );
};
