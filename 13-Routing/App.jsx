import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./css/style.css";
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
