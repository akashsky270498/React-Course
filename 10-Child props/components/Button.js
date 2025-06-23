import styles from "../css/AppleCounter.module.css"
const Button = ({
  imageUrl,
  buttonName,
  buttonTitle,
  children,
  clickHandler,
}) => {
  return (
    <button className={styles.button} onClick={clickHandler} title={buttonTitle}>
      {children}
      <img src={imageUrl} alt={buttonName} />
    </button>
  );
};

export default Button;
