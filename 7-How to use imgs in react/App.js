// export default function App () {
//     return <div>Hello from App.</div>
// }

import AppleCounter from "./components/AppleCounter";
const App = ({ root }) => {
  return (
    <div>
      {/* <h1
        onClick={(e) => {
          console.log(e);
        }}
      >
        Hellow
      </h1> */}

      {/* <input
        type="text"
        onChange={(e) => {
          console.log(e);
        }}
      /> */}
      <AppleCounter root={root} />
    </div>
  );
};

export default App;
