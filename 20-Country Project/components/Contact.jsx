import { useParams } from "react-router-dom";

const Contact = () => {
  const params = useParams();
  console.log("params: ", params);
  return <h2>Contact Us</h2>;
};

export default Contact;
