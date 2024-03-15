const mathTotalPositive = (good,neutral,total) => {
    return Math.round(
      ((good + neutral) / total) * 100
    );
};
  
export default mathTotalPositive