import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="right">
        <AiOutlineHeart />
        <AiOutlineShoppingCart />
      </div>
    </nav>
  );
};

export default NavBar;
