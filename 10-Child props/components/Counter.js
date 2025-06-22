import { useState } from "react";
import "../css/style.css";
const Counter = ({ counterName, children }) => {
  const [count, setCount] = useState(0);
  const [string, setString] = useState("welcome");

  console.log("counterName: ", counterName);
  return (
    <div className="counter-wrapper">
      <h2>{count}</h2>
      <button
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
      <h2>{string}</h2>
      {children}
    </div>
  );
};

export default Counter;
