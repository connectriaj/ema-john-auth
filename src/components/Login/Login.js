import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="form-container">
        <div className="form-title text-4xl text-center">Please Login</div>
        <form>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-control mt-5">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required />
          </div>

          <input className="btn-submit" type="submit" value="Login" />
        </form>
        <p className="mt-2 text-center">
          New to Ema-john?
          <Link className="underline text-orange-500" to="/signup">
            Create a New Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
