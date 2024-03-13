import { useState } from "react";

import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

function App() {
  const [feedbacks, setFeedbacks] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = (feedbackType) => {
    console.log(feedbackType);
    setFeedbacks(feedbacks[feedbackType] + 1);
    console.log(feedbacks[feedbackType]);
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback />
    </>
  );
}

export default App;
