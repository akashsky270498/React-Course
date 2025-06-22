const Button = ({
  imageUrl,
  buttonName,
  buttonTitle,
  children,
  clickHandler,
}) => {
  return (
    <button onClick={clickHandler} title={buttonTitle}>
      {children}
      <img src={imageUrl} alt={buttonName} />
    </button>
  );
};

export default Button;
