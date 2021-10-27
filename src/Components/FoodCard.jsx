import React from "react";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import noodles from "../images/noodles.jpeg";

const FoodCard = ({ mealname, id, category, area, tags }) => {
  return (
    <div className="card">
      <div className="top">
        <p className="mealname">{mealname}</p>
        <span className="heart">
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
      </div>
    </div>
  );
};

export default FoodCard;
