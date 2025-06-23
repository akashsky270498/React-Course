import AppleCounter from "./components/AppleCounter";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      <Counter counterName="Timer">
        <AppleCounter />  // We can pass anything as children: components, elements, strings, numbers, arrays, even functions.
      </Counter>
    </div>
  );
};

export default App;
