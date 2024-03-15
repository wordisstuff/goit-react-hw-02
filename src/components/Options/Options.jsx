import CSS from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, handleResetCounter }) => {
  return (
    <>
      {totalFeedback !== 0 && (
        <button onClick={handleResetCounter} className={CSS.btnReset}>
          Reset ☕️
        </button>
      )}
      <div className={CSS.box}>
        <button className={CSS.btn} onClick={() => updateFeedback("good")}>
          Good <br />
          😀
        </button>
        <button className={CSS.btn} onClick={() => updateFeedback("neutral")}>
          Neutral <br />
          🙄
        </button>
        <button className={CSS.btn} onClick={() => updateFeedback("bad")}>
          Bad <br />
          🥺
        </button>
      </div>
    </>
  );
};

export default Options;
