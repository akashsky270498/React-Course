import { useState } from "react";

const About = () => {
  const [todosList, setTodosList] = useState([]);

  return (
    <>
      <h1 className="text-xl">We are Avengers</h1>
      <button className="p-2 text-white bg-black rounded-sm"
        onClick={() => {
          import("../data").then((module) => setTodosList(module.todos));
        }}
      >
        Load Data
      </button>
      <ul>
        {/* {todosList.map((todo) => {
            return <li key={todo.id}>{todo.title}</li>
        })} */}
        {todosList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export default About;
