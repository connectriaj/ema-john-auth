import React from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./Login.css";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="form-container">
        <div className="form-title text-4xl text-center">Please Login</div>
        <form onSubmit={handleSubmit}>
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
