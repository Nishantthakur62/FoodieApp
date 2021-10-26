import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>FOODIE</h1>
      </div>
      <div className="right">
        <AiOutlineHeart />
        <AiOutlineShoppingCart />
      </div>
    </nav>
  );
};

export default NavBar;
