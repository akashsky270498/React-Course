const Button = ({ imageUrl, title, clickHandler }) => {
  return (
    <button onClick={clickHandler} title={title}>
      <img src={imageUrl} alt="button" />
    </button>
  );
};

export default Button;
