import { useEffect } from "react";
import { useState } from "react";

const NewCounter = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      console.log("hihihi");
      console.log("mount and update both happens inside useEffect");
    }, 1000);

    return () => {
      console.log("Clean up function => unmount");
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <h2 className="m-4 text-red-500 underline ">{name}</h2>
      <div className="flex gap-4 items-center m-6">
        <button
          className="bg-blue-400 px-4 py-1 rounded"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <h2>{count}</h2>
        <button
          className="bg-blue-400 px-4 py-1 rounded"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>

      <div className="flex gap-4 items-center m-6">
        <button
          className="bg-blue-400 px-4 py-1 rounded"
          onClick={() => setCount2(count2 - 1)}
        >
          -
        </button>
        <h2>{count2}</h2>
        <button
          className="bg-blue-400 px-4 py-1 rounded"
          onClick={() => setCount2(count2 + 1)}
        >
          +
        </button>
      </div>
    </>
  );
};

export default NewCounter;
