import Counter from "./components/Counter";
import { Fragment } from "react";

console.log(Fragment) // Symbol.for(React.fragment:::::: Datatype of Fragment is Symbol
const App = () => {
  return (
    <Fragment>
      <Counter counterName="Timer" />
    </Fragment>
  );
};

export default App;


/*
<></> === <Fragment></Fragment>
*/