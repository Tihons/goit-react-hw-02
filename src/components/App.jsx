const React = require("react");
const { useState, useEffect } = React;
import css from "./App.module.css";
import { Description } from "./Description/Description";
import { Feedback } from "./Feedback/Feedback";
import { Options } from "./Options/Options";

const config = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const localStorageSettings = () => {
  const savedObject = window.localStorage.getItem("settings");
  if (savedObject !== null) {
    return JSON.parse(savedObject);
  }
  return config;
};

export const App = () => {
  let [count, setCount] = useState(localStorageSettings);

  useEffect(() => {
    window.localStorage.setItem("settings", JSON.stringify(count));
  }, [count]);

  const handleClick = (value) => {
    setCount({ ...count, [value]: count[value] + 1 });
  };

  const handleClickReset = () => {
    setCount(config);
  };

  const nameParams = Object.keys(config);
  const totalFeedback = count.good + count.bad + count.neutral;
  const positive = Math.round(
    ((count.good + count.neutral) / totalFeedback) * 100
  );
  {
    checking ? (
      <p>No feedback yet</p>
    ) : totalFeedback === 0 ? (
      <p>Total feedback is 0</p>
    ) : (
      <p>Total feedback is not 0</p>
    );
  }

  return (
    <div className={css.wrapper}>
      <Description />
      <Options
        checking={checking}
        onHandleClick={handleClick}
        onHandleClickReset={handleClickReset}
        params={nameParams}
      />
      <Feedback
        checking={checking}
        total={totalFeedback}
        positive={positive}
        obj={count}
      />
    </div>
  );
};
