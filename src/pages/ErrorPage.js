import { useNavigate } from "react-router-dom";

import Button from "../components/FormElements/Button";

import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.page}>
      <p>404</p>
      <p>The page you are looking for cannot be found</p>
      <Button onClick={() => navigate("/")}>Back to Homepage</Button>
    </div>
  );
};

export default ErrorPage;
