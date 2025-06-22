import { useState } from "react";
import "../css/style.css";
const Counter = ({ counterName }) => {
  const [count, setCount] = useState(0);
  const [string, setString] = useState("welcome");

  console.log("counterName: ", counterName);
  return (
    <>
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
    </>
  );
};

export default Counter;
