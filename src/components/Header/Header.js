import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav className="header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {user?.uid ? (
          <Link onClick={logOut} to="/login">
            Log out
          </Link>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
        <span className="text-red-600 mx-4">{user?.email}</span>
      </div>
    </nav>
  );
};

export default Header;
