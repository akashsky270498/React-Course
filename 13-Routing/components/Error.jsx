import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div>Soemthing went wrong...</div>
      <div>Status {error.status}</div>
      <div>Message {error.statusText}</div>
    </>
  );
};

export default Error;
