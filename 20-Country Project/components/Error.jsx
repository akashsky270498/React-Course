import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log("Error: ", error.message);
  return <div>Something went wrong: {error.message}</div>;
};

export default Error;
