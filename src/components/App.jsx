import React, { useState, useEffect } from "react";
import css from "./App.module.css";
import { Description } from "./Description/Description";
import { Feedback } from "./Feedback/Feedback";
import { Options } from "./Options/Options";

export const App = () => {
  const localStorageSettings = {
    good: 0,
    bad: 0,
    neutral: 0,
  };

  const [count, setCount] = useState(
    JSON.parse(window.localStorage.getItem("settings")) || localStorageSettings
  );

  useEffect(() => {
    window.localStorage.setItem("settings", JSON.stringify(count));
  }, [count]);

  const handleClick = (value) => {
    setCount({ ...count, [value]: count[value] + 1 });
  };

  const handleClickReset = () => {
    setCount(localStorageSettings);
  };

  const config = {
    good: 0,
    bad: 0,
    neutral: 0,
  };

  const nameParams = Object.keys(config);

  const totalFeedback = count.good + count.bad + count.neutral;
  const positive = Math.round(
    ((count.good + count.neutral) / totalFeedback) * 100
  );

  return (
    <div className={css.wrapper}>
      <Description />
      <Options
        checking={totalFeedback}
        onHandleClick={handleClick}
        onHandleClickReset={handleClickReset}
        params={nameParams}
      />
      {totalFeedback ? (
        <Feedback
          checking={totalFeedback > 0}
          total={totalFeedback}
          positive={positive}
          obj={count}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};
