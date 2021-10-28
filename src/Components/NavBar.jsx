import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../images/logo.png";
import data from './data'

const NavBar = ({favFoodList,toggle,setToggle,setItems}) => {
  const displayFav=()=>{
  setToggle(!toggle);
  document.querySelector(".NavHeart").classList.toggle("red")
  
  if(toggle)
  {
    setItems(favFoodList);
    
  }
  else{
    setItems(data);
  
  }
  }
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="right">
        <span className="NavHeart"><AiOutlineHeart 
         onClick={displayFav}
        /></span>
        <AiOutlineShoppingCart />
      </div>
    </nav>
  );
};

export default NavBar;
