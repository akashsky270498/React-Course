import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h2>Something went wrong!!</h2>
      <p>{`Error status code: ${error.status}`}</p>
      <p>{`Error message: ${error.statusText}`}</p>
    </>
  );
};

export default Error;
