import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div>
      <div className="form-container">
        <div className="form-title text-4xl text-center">Please Sign Up</div>
        <form>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-control mt-5">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required />
          </div>
          <div className="form-control mt-5">
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" name="confirm" required />
          </div>

          <input className="btn-submit" type="submit" value="Sign Up" />
        </form>
        <p className="mt-2 text-center">
          Already have an Account?
          <Link className="underline text-orange-500" to="/login">
            Please Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
