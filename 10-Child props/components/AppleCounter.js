import AppleBasket from "./AppleBasket";
import Button from "./Button";
import { useState } from "react";
import styles from "../css/AppleCounter.module.css";

const AppleCounter = () => {
  const totalAppleCount = 10;
  console.log(totalAppleCount);
  const [rightBasketAppleCount, setRightBasketAppleCount] = useState(0);
  const [leftBasketAppleCount, setLeftBasketAppleCount] = useState(
    totalAppleCount - rightBasketAppleCount
  );

  const leftBasketClickHandler = () => {
    if (rightBasketAppleCount > 0) {
      setRightBasketAppleCount(rightBasketAppleCount - 1);
      setLeftBasketAppleCount(leftBasketAppleCount + 1);
    }
  };

  const rightBasketClickHandler = () => {
    if (leftBasketAppleCount > 0) {
      setLeftBasketAppleCount(leftBasketAppleCount - 1);
      setRightBasketAppleCount(rightBasketAppleCount + 1);
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <AppleBasket
          appleCount={leftBasketAppleCount}
          basketName="Left-Basket"
          className={styles.appleBasket}
        />

        <Button
          imageUrl="https://img.icons8.com/?size=50&id=7811&format=png"
          buttonTitle="Left Arrow"
          buttonName="Left"
          clickHandler={leftBasketClickHandler}
        >
          Left Button
        </Button>

        <Button
          imageUrl="https://img.icons8.com/?size=50&id=7789&format=png"
          buttonTitle="Right Arrow"
          buttonName="Right"
          clickHandler={rightBasketClickHandler}
          children="Right Button"
        />

        <AppleBasket
          appleCount={rightBasketAppleCount}
          basketName="Right-Basket"
          className={styles.appleBasket}
        />
      </section>
    </div>
  );
};

export default AppleCounter;

// className={[styles.button, styles.textXl].join(' ')} in case of multiple
