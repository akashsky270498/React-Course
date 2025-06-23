import { useState } from "react";
import styles from  "../css/Counter.module.css";
const Counter = ({ counterName, children }) => {
  const [count, setCount] = useState(0);
  const [string, setString] = useState("welcome");

  console.log("counterName: ", counterName);
  return (
    <div className={styles['counter-wrapper']}>
      <h2>{count}</h2>
      <button
      className={styles.button}
        onClick={() => {
          setCount((previousCount) => previousCount + 1);
          setCount((previousCount) => previousCount + 1);
          setCount((previousCount) => previousCount + 1);
          setString(() => "React");
          setString(() => "JS");
        }}
      >
        Click Here!
      </button>
      <h2 className={styles.h2}>{string}</h2>
      {children} /* this is child component */
    </div>
  );
};

export default Counter;
