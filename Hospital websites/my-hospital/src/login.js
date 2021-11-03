import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { Link } from "react-router-dom";
function Login() {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const SignIn = () => {
    axios
      .post("http://localhost:4000/login", {
        userlog: user,
        passwordlog: password,
      })
      .then((Response) => {
        console.log(Response);
      });
  };
  return (
    <div className="LoginContainer">
      <div className="FormContainer">
        <h2>Sign In</h2>
        <form className="FormContain">
          <h5>Username</h5>
          <input
            type="text"
            onChange={(e) => {
              setuser(e.target.value);
            }}
          />
          <h5>Password</h5>
          <input
            type="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <button className="login_signinbutton" type="submit" onClick={SignIn}>
            Sign In
          </button>
        </form>
        <div className="SignUp">
          <Link to="/register" className="Linkregister">
            Do not have an account?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
