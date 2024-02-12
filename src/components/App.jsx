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
        checking={checking}
        onHandleClick={handleClick}
        onHandleClickReset={handleClickReset}
        params={nameParams}
      />
      {totalFeedback ? (
        <Feedback
          checking={checking}
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
