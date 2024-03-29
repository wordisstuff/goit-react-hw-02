import { useEffect, useState } from "react";

import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

import mathTotal from "./helpers/mathTotalPositive/mathTotalPositive";

const feedbackObject = { good: 0, neutral: 0, bad: 0 };

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const feedbackParse =
      JSON.parse(localStorage.getItem("Feedback data")) ?? feedbackObject;
    return feedbackParse;
  });

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const totalPositive = mathTotal(
    feedbacks.good,
    feedbacks.neutral,
    totalFeedback
  );

  const updateFeedback = (feedbackType) => {
    setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  };

  const handleResetCounter = () => {
    setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    console.log("Hello");
    localStorage.setItem("Feedback data", JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleResetCounter={handleResetCounter}
      />
      {totalFeedback !== 0 ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          totalPositive={totalPositive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
