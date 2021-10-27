import React from "react";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import noodles from "../images/noodles.jpeg";
import data from "./data";

const FoodCard = ({ mealname, id, category, area, tags,setFavFoodList,favFoodList,price}) => {
  const handleFavourite=(e)=>{
     
      let foundmeal=data.find((item)=>item.idMeal===id)
      setFavFoodList([...favFoodList,  foundmeal])
  }
 
  
  return (
    <div className="card">
      <div className="top">
        <p className="mealname">{mealname}</p>
        <span className="heart" onClick={handleFavourite}>
          <AiFillHeart />
        </span>
      </div>
      <div className="middle">
        <img src={noodles} />
        <div className="foodinfo">
          <div className="category-area">
            <span className="category">{category}</span>
            <span className="area">{area}</span>
          </div>
          <div className="foodtag">
            <span>{tags}</span>
            
          </div>
        </div>
      </div>
      <div className="bottom">
        <button>
          <p>Add To Cart</p>
          <AiOutlineShoppingCart />
        </button>
        <div className="price">
        ₹{price}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
