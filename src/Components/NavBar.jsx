import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../images/logo.png";


const NavBar = () => {
  const displayFav=()=>{

  }
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="right">
        <span className="NavHeart"><AiOutlineHeart /></span>
        <AiOutlineShoppingCart />
      </div>
    </nav>
  );
};

export default NavBar;
