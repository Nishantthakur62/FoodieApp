import React from "react";
import data from "./data";
import FoodCard from "./FoodCard";

console.log({ data });
const FoodWrapper = () => {
  return (
    <div>
      {data.map((item, idx) => {
        return (
          <FoodCard
            key={idx}
            mealname={item.strMeal}
            id={item.idMeal}
            category={item.strCategory}
            area={item.strArea}
            tags={item.strTags}
          />
        );
      })}
    </div>
  );
};

export default FoodWrapper;
