const Options = ({ updateFeedback }) => {
  return (
    <>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("Neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("Bad")}>Bad</button>
    </>
  );
};

export default Options;
