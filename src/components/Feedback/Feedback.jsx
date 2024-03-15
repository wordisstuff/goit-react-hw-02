import CSS from "./Feedback.module.css";

const Feedback = ({ feedbacks, totalFeedback, totalPositive }) => {
  return (
    <>
      <ul className={CSS.list}>
        <li>
          Good <span>{feedbacks.good !== 0 && feedbacks.good}</span>{" "}
        </li>
        <li>
          Neutral <span>{feedbacks.neutral !== 0 && feedbacks.neutral}</span>{" "}
        </li>
        <li>
          Bad <span>{feedbacks.bad !== 0 && feedbacks.bad}</span>
        </li>
        <li>
          Total <span>{totalFeedback}</span>
        </li>
        <li>
          Positive <span>{totalPositive}%</span>
        </li>
      </ul>
    </>
  );
};

export default Feedback;
