import css from './Feedback.module.css';

export const Feedback = ({ feedbackVal, total, rating }) => {
  return (
    <div className={css.wrap}>
      <p className={css.text}>Good: {feedbackVal.good}</p>
      <p className={css.text}>Neutral: {feedbackVal.neutral}</p>
      <p className={css.text}>Bad: {feedbackVal.bad}</p>
      <p className={css.text}>Total: {total}</p>
      <p className={css.text}>Positive: {rating}%</p>
    </div>
  );
};