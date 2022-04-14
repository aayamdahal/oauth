import { Button, Divider } from "@mantine/core";
import React from "react";
import { BsGoogle, BsFacebook, BsGithub } from "react-icons/bs";

const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  return (
    <div>
      <div className="login py-3">
        <h1 className="login-title mb-4">Choose a login method</h1>
        <div className="wrapper">
          <div className="left">
            <div className="login-btn google" onClick={google}>
              <BsGoogle /> <span>Login with Google</span>
            </div>
            <div className="login-btn facebook">
              <BsFacebook /> <span>Login with Facebook</span>
            </div>
            <div className="login-btn github">
              <BsGithub /> <span>Login with Github</span>
            </div>
          </div>

          <form class="d-flex justify-content-center flex-column">
            <div class="form-group mb-3">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <button type="submit" class="btn btn-primary center ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
