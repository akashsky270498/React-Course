import styles from "../css/AppleCounter.module.css"
const AppleBasket = ({ appleCount, basketName }) => {
  return (
    <div className={styles.appleBasket}>
      <h1>
        <span>{appleCount}</span>
      </h1>
      <p>
        {/* {basketName} {appleCount === 10 ? "(full)" : "(empty)"} */}
        {basketName} {appleCount === 10 && "(full)"}
        {appleCount === 0 && "(empty)"} {appleCount === 5 && "(50% filled)"}
      </p>
    </div>
  );
};

export default AppleBasket;
