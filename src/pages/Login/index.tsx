import React from "react";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  return (
    <div>
      LoginPage
      <br />
      <Link to="/home">go to Home</Link>
    </div>
  );
};

export default LoginPage;
