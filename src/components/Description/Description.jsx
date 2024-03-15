import CSS from "./Description.module.css";

const Description = () => {
  return (
    <>
      <h2 className={CSS.title}>Sip Happens Café</h2>
      <p className={CSS.description}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
};

export default Description;
