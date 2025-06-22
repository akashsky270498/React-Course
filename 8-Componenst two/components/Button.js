const Button = ({ imageUrl, buttonTitle, buttonName, clickHandler }) => {
  return (
    <button onClick={clickHandler} title={buttonTitle}>
      <img src={imageUrl} alt={buttonName} />
    </button>
  );
};

export default Button;
