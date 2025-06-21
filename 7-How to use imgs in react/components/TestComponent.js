import { useState } from "react";

const Counter = () => {
//   const myStateArray = useState(0);

  //   return (
  //     <div style={{ textAlign: "center" }}>
  //       <h1>{myStateArray[0]}</h1>
  //       <button onClick={() => {
  //         myStateArray[1](myStateArray[0] + 1)
  //       }} style={{ backgroundColor: 'white'}}>Increase Button</button>
  //     </div>
  //   );

//   const count = myStateArray[0];
//   const setCount = myStateArray[1];

const [count, setCount ] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        style={{ backgroundColor: "white" }}
      >
        Increase button
      </button>
    </div>
  );
};

export default Counter;
