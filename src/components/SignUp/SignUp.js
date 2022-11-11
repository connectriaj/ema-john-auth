import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./SignUp.css";

const SignUp = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password.length < 6) {
      setError("Password should 6 characters or more!");
    }

    if (password !== confirm) {
      setError("password did not match! try again.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="form-container">
        <div className="form-title text-4xl text-center">Please Sign Up</div>
        <form onSubmit={handleSubmit}>
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
        <p className="text-red-600">{error}</p>
      </div>
    </div>
  );
};

export default SignUp;
