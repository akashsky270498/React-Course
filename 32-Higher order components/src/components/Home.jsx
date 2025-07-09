import ClickCounter from "./clickCounter";
import HoverCounter from "./HoverCounter";

const Home = () => {
  return (
    <>
      <h2 className="text-xl">Welcome to our Home Page.</h2>
      <ClickCounter name="Click Counter" />
      <HoverCounter name="Hover Counter" />
    </>
  );
};

export default Home;
