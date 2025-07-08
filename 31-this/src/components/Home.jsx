import NewCounter from "./NewCounter";
import OldCounter from "./OldCounter";

const Home = () => {
  return (
    <>
      <h2 className="text-xl">Welcome to our Home Page.</h2>
      <NewCounter name="New Counter" />
      <OldCounter name="Old Counter" />
    </>
  );
};

export default Home;
